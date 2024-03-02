const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router
  .route('/dashboard')
  .get(authController.protected, authController.dashboard);

module.exports = router;
