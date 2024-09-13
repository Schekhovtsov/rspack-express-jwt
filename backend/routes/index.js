const { verifyUserToken, IsAdmin, IsUser } = require('../middleware/auth');

const router = require('express').Router();
const userController = require('../controllers/user');

router.post('/register', userController.register);
router.post('/login', userController.login);

router.get('/getAll', userController.getAll);
router.get('/user/:id', userController.getById);

// Auth user only
router.get('/user', verifyUserToken, IsUser, userController.userPage);

// Auth Admin only
router.get('/admin', verifyUserToken, IsAdmin, userController.adminPage);

module.exports = router;
