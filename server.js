// Importar
const express = require("express");
const reservasRouter = require("./routes/routesReservas");
require("dotenv").config();


// Crear aplicación
const app = express();

// Crear puerto
const port = process.env.PORT || 3000;

// Middleware para leer JSON en las solicitudes
app.use(express.json());

// Ruta raíz
app.get("/", (req, res) => {
    res.send("Servidor OK");
});

// Ruta principal
app.use("/api/reservas", reservasRouter);

// Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

// Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Reservas - Proyecto Mauricio Larrondo",
      version: "1.0.0",
      description: "Documentación de la API del sistema de reservas",
    },
  },
  apis: ["./routes/*.js"], // 👈 Aquí Swagger buscará las rutas documentadas
};

const swaggerSpecs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Levantar servidor
app.listen(port, () => console.log("Servidor corriendo en http://localhost:3000"));

