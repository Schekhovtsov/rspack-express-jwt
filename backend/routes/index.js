const { verifyUserToken, IsAdmin, IsUser } = require('../middleware/auth');

const router = require('express').Router();
const userController = require('../controllers/user');

router.post('/register', userController.register);
router.post('/login', userController.login);

router.get('/getAll', userController.getAll);
router.get('/user/:id', userController.getById);

// Auth Admin only
router.get('/admin', verifyUserToken, IsAdmin, userController.admin);

module.exports = router;
