const express = require('express');
const router = express.Router();
const simuladorController = require('../controllers/simulador.controller');

// POST /api/simulador
router.post('/', simuladorController.simularCredito);

module.exports = router;
