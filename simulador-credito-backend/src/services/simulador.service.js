const dayjs = require('dayjs');

function calcularSimulacion({ monto, tasa_anual, plazo_meses, fecha_inicio }) {
  const i = (tasa_anual / 12) / 100; // tasa mensual
  const n = plazo_meses;
  const P = monto;

  const cuota = P * (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);

  let saldo = P;
  const tabla_amortizacion = [];

  for (let mes = 1; mes <= n; mes++) {
    const interes_mes = saldo * i;
    const abono_capital = cuota - interes_mes;
    saldo -= abono_capital;

    tabla_amortizacion.push({
      numero_cuota: mes,
      fecha_pago: dayjs(fecha_inicio).add(mes, 'month').format('YYYY-MM-DD'),
      cuota_total: parseFloat(cuota.toFixed(2)),
      interes_mes: parseFloat(interes_mes.toFixed(2)),
      abono_capital: parseFloat(abono_capital.toFixed(2)),
      saldo_restante: parseFloat(Math.max(saldo, 0).toFixed(2))
    });
  }

  const total_pagado = cuota * n;
  const total_intereses = total_pagado - P;

  return {
    cuota_mensual: parseFloat(cuota.toFixed(2)),
    total_pagado: parseFloat(total_pagado.toFixed(2)),
    total_intereses: parseFloat(total_intereses.toFixed(2)),
    tabla_amortizacion
  };
}

module.exports = {
  calcularSimulacion
};
