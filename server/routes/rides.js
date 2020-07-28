const express = require('express');
const router = express.Router();

const rideController = require('../controllers/rideController');

/* POST one ride. */
router.post('/', rideController.create);

/* GET one ride. */
router.get('/:id', rideController.findOne);

/* GET rides listing. */
router.get('/', rideController.findAll);

/* DELETE one ride. */
router.delete('/:id', rideController.delete);

module.exports = router;
