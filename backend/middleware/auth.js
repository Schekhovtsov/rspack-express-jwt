const config = require('../config/config');
const jwt = require('jsonwebtoken');

exports.verifyUserToken = (req, res, next) => {
    let token = req.headers.authorization;

    if (!token) {
        return res.status(401).send('Токен авторизации не обнаружен');
    }

    try {
        token = token.split(' ')[1]; // Remove Bearer from string

        if (token === 'null' || !token) {
            return res.status(401).send('Вы не авторизованы');
        }

        let verifiedUser = jwt.verify(token, config.TOKEN_SECRET); // config.TOKEN_SECRET => 'secretKey'

        if (!verifiedUser) {
            return res.status(401).send('Вы не авторизованы');
        }

        req.user = verifiedUser; // user_id & role
        console.log('verifiedUser: ', verifiedUser);
        next();
    } catch (error) {
        res.status(400).send('Некорретный токен');
    }
};

exports.IsAdmin = async (req, res, next) => {
    console.log(req.user);
    if (req.user.role === 'admin') {
        next();
    } else {
        return res.status(401).send('Нет доступа!');
    }
};
