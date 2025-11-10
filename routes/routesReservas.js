// routes/routesReservas.js

const express = require("express");
const {
  crearReservas,
  obtenerReservas,
  actualizarReserva,
  eliminarReserva,
  obtenerReservaId
} = require("../controllers/controllersReservas");

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Reserva:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           example: "c2c7de69-d4da-4a17-a72e-85d7b9957b7a"
 *         nombreHotel:
 *           type: string
 *           example: "Hotel del Mar"
 *         fecha:
 *           type: string
 *           description: Fecha de la reserva (ISO string)
 *           example: "2025-12-20T00:00:00.000Z"
 *         tipoHabitacion:
 *           type: string
 *           enum: [Normal, Suite]
 *           example: "Suite"
 *         adultos:
 *           type: integer
 *           example: 2
 *         ninos:
 *           type: integer
 *           example: 1
 *         pagada:
 *           type: boolean
 *           description: Estado de pago; se crea en false automáticamente
 *           example: false
 */

/**
 * @swagger
 * /api/reservas:
 *   get:
 *     summary: Listar reservas (con filtros opcionales)
 *     description: Retorna todas las reservas o aplica filtros por nombre de hotel, tipo de habitación, rango de fechas, estado de pago o número de huéspedes.
 *     parameters:
 *       - in: query
 *         name: nombreHotel
 *         schema:
 *           type: string
 *         description: Filtrar por nombre exacto del hotel
 *       - in: query
 *         name: tipoHabitacion
 *         schema:
 *           type: string
 *           enum: [Normal, Suite]
 *         description: Filtrar por tipo de habitación
 *       - in: query
 *         name: fechaInicio
 *         schema:
 *           type: string
 *           example: "2025-12-01"
 *         description: Fecha de inicio (inclusive) del rango a filtrar (YYYY-MM-DD)
 *       - in: query
 *         name: fechaFin
 *         schema:
 *           type: string
 *           example: "2025-12-31"
 *         description: Fecha de término (inclusive) del rango a filtrar (YYYY-MM-DD)
 *       - in: query
 *         name: pagada
 *         schema:
 *           type: boolean
 *         description: Filtrar por estado de pago (true/false)
 *       - in: query
 *         name: numHuespedes
 *         schema:
 *           type: integer
 *         description: Filtrar por reservas con total de huéspedes (adultos + niños) mayor o igual a este valor
 *     responses:
 *       200:
 *         description: Lista de reservas obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reserva'
 *       404:
 *         description: No se encontraron reservas con los filtros aplicados
 */
router.get("/", obtenerReservas);

/**
 * @swagger
 * /api/reservas/{id}:
 *   get:
 *     summary: Obtener una reserva específica por su ID
 *     description: Retorna una única reserva identificada por su ID único.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID único de la reserva
 *     responses:
 *       200:
 *         description: Reserva encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reserva'
 *       404:
 *         description: No se encontró una reserva con el ID indicado
 */
router.get("/:id", obtenerReservaId);

/**
 * @swagger
 * /api/reservas:
 *   post:
 *     summary: Crear una nueva reserva
 *     description: Crea una reserva con pagada=false por defecto.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [nombreHotel, fecha, tipoHabitacion, adultos, ninos]
 *             properties:
 *               nombreHotel:
 *                 type: string
 *                 example: "Hotel del Mar"
 *               fecha:
 *                 type: string
 *                 example: "2025-12-20"
 *               tipoHabitacion:
 *                 type: string
 *                 enum: [Normal, Suite]
 *                 example: "Suite"
 *               adultos:
 *                 type: integer
 *                 example: 2
 *               ninos:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Reserva creada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "✅ Reserva realizada con éxito"
 *                 reserva:
 *                   $ref: '#/components/schemas/Reserva'
 *       400:
 *         description: Datos inválidos (por ejemplo, tipoHabitacion distinto de Normal/Suite)
 */
router.post("/", crearReservas);

/**
 * @swagger
 * /api/reservas/{id}:
 *   put:
 *     summary: Actualizar una reserva existente (reemplazo completo)
 *     description: Actualiza todos los campos de la reserva. El id no cambia.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID de la reserva a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [nombreHotel, fecha, tipoHabitacion, adultos, ninos, pagada]
 *             properties:
 *               nombreHotel:
 *                 type: string
 *                 example: "Hotel Andes"
 *               fecha:
 *                 type: string
 *                 example: "2025-12-25"
 *               tipoHabitacion:
 *                 type: string
 *                 enum: [Normal, Suite]
 *                 example: "Normal"
 *               adultos:
 *                 type: integer
 *                 example: 2
 *               ninos:
 *                 type: integer
 *                 example: 0
 *               pagada:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Reserva actualizada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "✅ Reserva actualizada con éxito"
 *                 reserva:
 *                   $ref: '#/components/schemas/Reserva'
 *       400:
 *         description: Datos inválidos (por ejemplo, tipoHabitacion inválido)
 *       404:
 *         description: Reserva no encontrada
 */
router.put("/:id", actualizarReserva);

/**
 * @swagger
 * /api/reservas/{id}:
 *   delete:
 *     summary: Eliminar una reserva por ID
 *     description: Elimina y retorna la reserva eliminada.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID de la reserva a eliminar
 *     responses:
 *       200:
 *         description: Reserva eliminada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "✅ Reserva eliminada con éxito"
 *                 eliminada:
 *                   $ref: '#/components/schemas/Reserva'
 *       404:
 *         description: Reserva no encontrada
 */
router.delete("/:id", eliminarReserva);

module.exports = router;
