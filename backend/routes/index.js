const router = require('express').Router();
const userController = require('../controllers/user');

router.post('/register', userController.register);
router.post('/login', userController.login);

router.get('/getAll', userController.getAll);
router.get('/user/:id', userController.getById);

module.exports = router;
