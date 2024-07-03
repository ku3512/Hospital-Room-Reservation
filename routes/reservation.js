const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

router.post('/reserve', reservationController.reserveRoom);
router.get('/availability', reservationController.getAvailability);

module.exports = router;
