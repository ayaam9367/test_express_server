const express = require('express');
const liveMatchController = require('../controllers/liveMatch.controller');
const router = express.Router();


router.get('/:id', liveMatchController.liveMatches );
router.get('/', liveMatchController.liveMatchAPI);

module.exports = router;
