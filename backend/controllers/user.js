const config = require('../config/config');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const sqlite3 = require('sqlite3').verbose();

const dbPath = path.join(__dirname, '../database.db');

fs.unlink(dbPath, (err) => {
    if (err) {
        console.error('Error deleting database: ' + err.message);
    } else {
        console.log('>> Database deleted successfully');
    }
});

// Connect to DB
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Erro opening database ' + err.message);
    } else {
        console.log('>> Database created successfully');
        db.run(
            'CREATE TABLE users( \
            id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\
            login NVARCHAR(20)  NOT NULL,\
            password NVARCHAR(20)  NOT NULL,\
            role NVARCHAR(20)  NOT NULL\
        )',
            async (err) => {
                if (err) {
                    console.log('Table already exists.');
                }
                let insert =
                    'INSERT INTO users (login, password, role) VALUES (?,?,?)';

                const getCryptedPassword = async (password) => {
                    const salt = await bcrypt.genSalt(10);
                    return await bcrypt.hash(password, salt);
                };

                db.run(insert, [
                    'admin',
                    (await getCryptedPassword('admin')).toString(),
                    'admin',
                ]);
                db.run(insert, [
                    'user',
                    (await getCryptedPassword('user')).toString(),
                    'user',
                ]);
            }
        );
    }
});

exports.getById = (req, res, next) => {
    var params = [req.params.id];
    db.get(`SELECT * FROM users where id = ?`, [req.params.id], (err, row) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.status(200).json(row);
    });
};

exports.getAll = (req, res, next) => {
    db.all('SELECT * FROM users', [], (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.status(200).json({ rows });
    });
};

exports.register = async (req, res, next) => {
    const body = req.body;
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(body.password, salt);

    let user = {
        login: req.body.login,
        password: password,
        role: req.body.role,
    };

    db.run(
        `INSERT INTO users (login, password, role) VALUES (?,?,?)`,
        [user.login, user.password, user.role],
        function (err, result) {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }
            let payload = {
                id: this.lastID,
                role: user.role || 0,
            };
            const token = jwt.sign(payload, config.TOKEN_SECRET);

            res.status(201).json({
                token,
            });
        }
    );
};

exports.login = (req, res, next) => {
    const body = req.body;
    db.get(
        `SELECT * FROM users where login = ?`,
        [body.login],
        async (err, user) => {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }

            if (user) {
                const validPass = await bcrypt.compare(
                    body.password,
                    user.password
                );

                if (!validPass) {
                    return res.status(401).send('Login or Password is wrong');
                }

                let payload = { id: user.id, role: user.role };
                const token = jwt.sign(payload, config.TOKEN_SECRET);

                res.status(200)
                    .header('auth-token', token)
                    .send({ data: user, token: token });
            }
        }
    );
};

exports.admin = (req, res, next) => {
    res.send('Protected admin route');
};
