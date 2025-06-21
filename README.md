# Prueba_Tecnica_BrandonRomero


# Simulador de Crédito

Este proyecto es una solución completa para simular créditos mediante el sistema de amortización. Permite ingresar el monto del crédito, la tasa de interés, el plazo y la fecha de inicio, devolviendo una simulación detallada de cuotas mensuales, intereses y amortización del capital.

## Tecnologías utilizadas

- Backend: **Node.js**, **Express**
- Frontend: **Angular**
- Formato de respuesta: **JSON**

---

## Características principales

- Ingreso de datos para la simulación:  
  `Monto`, `Tasa de interés anual`, `Plazo (meses)`, `Fecha de inicio`.
- Cálculo automático de:
  - Cuota mensual fija
  - Total pagado al final del crédito
  - Total de intereses pagados
  - Tabla de amortización mes a mes
- API REST funcional y consumida desde Angular
- Interfaz clara y amigable para el usuario

---

## Instalación del backend

### 1. Clonar el repositorio

git clone https://github.com/Brandon-Romero/Prueba_Tecnica_BrandonRomero.git

- Para ejecutar el Backend:

cd simulador-credito-backend

1. Instalar dependencias, en ta terminal:
    npm install

2. Ejecutar el servidor, en la terminal:
node src/index.js

El servidor estará disponible en:
http://localhost:3000/api/simulador

3. curl solicitada :

curl --location 'http://localhost:3000/api/simulador' \
--header 'Content-Type: application/json' \
--data '{
  "monto": 8000000,
  "tasa_anual": 18,
  "plazo_meses": 24,
  "fecha_inicio": "2025-07-01"
}'

- Para ejecutar el frontend:

cd simulador-credito-frontend

1. Instalar dependencias, en ta terminal:
    npm install

2. Ejecutar la vista en la terminal:

ng serve 

la vista stará disponible en:

http://localhost:4200/

3. datos de prueba: 

Monto del crédito: 8000000

Tasa de interés anual (%): 18

Plazo (meses): 24

Fecha de inicio: 2025-07-01