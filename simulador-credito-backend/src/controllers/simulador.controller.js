const { calcularSimulacion } = require('../services/simulador.service');

exports.simularCredito = (req, res) => {
  try {
    const datosEntrada = req.body;

    if (!datosEntrada.monto || !datosEntrada.tasa_anual || !datosEntrada.plazo_meses || !datosEntrada.fecha_inicio) {
      return res.status(400).json({ error: "Todos los campos son requeridos." });
    }

    const resultado = calcularSimulacion(datosEntrada);
    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: "Error al calcular simulación." });
  }
};
