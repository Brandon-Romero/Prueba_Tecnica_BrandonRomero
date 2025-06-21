const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const simuladorRoutes = require('./routes/simulador.routes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/simulador', simuladorRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
