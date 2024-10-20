const express = require('express');
const { getUsers } = require ('./userController');

const router = express.Router();

router.get('/users', getUsers);

module.exports = router;