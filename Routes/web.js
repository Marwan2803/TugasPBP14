const express = require('express');
const { homepage, about, usersView } = require('../controllers/homecontroller');
const router = express.Router();

router.get('/', homepage);
router.get('/about', about);
router.get('/user', usersView);
module.exports = router;