const express = require('express');
const router = express.Router();
const forgotController = require('../controllers/forgotpasswordController');

router.post('/',forgotController );

module.exports=router;