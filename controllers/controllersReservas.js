const { v4: uuidv4 } = require('uuid'); // Para generar ID únicos UUID

// Array de reservas
const reservas = [];

// POST Función para crear 
function crearReservas (req, res) {
    
    const { nombreHotel, fecha, tipoHabitacion, adultos, ninos, pagada } = req.body;

    if(req.body.tipoHabitacion !== "Normal" && req.body.tipoHabitacion !== "Suite") {
        return res.send(`El tipo de habitación debe ser "Normal" o "Suite"`);
    }

    const nuevaReserva = {
        id: uuidv4(),
        nombreHotel,
        fecha: new Date(fecha), 
        tipoHabitacion,
        adultos,
        ninos,
        pagada: false
    };

    reservas.push(nuevaReserva);

    return res.status(201).json({
        mensaje: "✅ Reserva realizada con éxito",
        reserva: nuevaReserva,
    });
}


// GET Función para leer 
function obtenerReservas(req, res) {
    
    const { nombreHotel, tipoHabitacion, fechaInicio, fechaFin, pagada, numHuespedes } = req.query;
    
    let reservasFiltradas = reservas;

    // Si en la solicitud se especifica un tipo de hebitación, solo mostrar esas
    if (tipoHabitacion) {
      return res.json(reservasFiltradas.filter(r => r.tipoHabitacion === tipoHabitacion));
    }

    // Si en la solicitud se especifica un hotel, solo mostrar esas
    if (nombreHotel) {
      return res.json(reservasFiltradas.filter(r => r.nombreHotel === nombreHotel));
    }

    // Si en la solicitud se especifica un rango de fechas, solo considerar las reservas cuya fecha esté dentro de ese rango
    if (fechaInicio && fechaFin) {
        const inicio = new Date(fechaInicio);
        const fin = new Date(fechaFin);

        reservasFiltradas = reservasFiltradas.filter(r => {
        const fechaReserva = new Date(r.fecha);
        return fechaReserva >= inicio && fechaReserva <= fin;
        });
    }

    // Si en la solicitud se especifica estado de pago, solo mostrar esas
    if (pagada !== undefined) {
        const estadoPago = pagada === "true";
        reservasFiltradas = reservasFiltradas.filter(r => r.pagada === estadoPago);
    }

    // Si en la solicitud se especifica número de huéspedes, solo mostrar las reservas con ese número o mayor (sumando adulto sy niños)
    if (numHuespedes !== undefined) {
        reservasFiltradas = reservas.filter(r => r.adultos + r.ninos >= numHuespedes);
    }
 
    res.json(reservasFiltradas);
}

// GET Función para leer por ID específico
function obtenerReservaId(req, res) {
    
    const { id } = req.params;

    const idx = reservas.findIndex(r => r.id === id);

    if(idx === -1) {
        return res.send(`✖️ Reserva no encontrada`);
    }

    res.json(reservas[idx]);
}



// PUT Función para actualizar 
function actualizarReserva (req, res) {
    
    const id = req.params.id;
    const { nombreHotel, fecha, tipoHabitacion, adultos, ninos, pagada } = req.body;

    // Buscar la reserva
    const reserva = reservas.find(r => r.id === id);

    if(!reserva) {
        return res.status(404).json({message: "Reserva no encontrada"});
    }
    
    if(req.body.tipoHabitacion !== "Normal" && req.body.tipoHabitacion !== "Suite") {
        return res.send(`El tipo de habitación debe ser "Normal" o "Suite"`);
    }

    // Actualizar campos
    reserva.nombreHotel = nombreHotel;
    reserva.fecha = new Date(fecha);
    reserva.tipoHabitacion = tipoHabitacion;
    reserva.adultos = adultos;
    reserva.ninos = ninos;
    reserva.pagada = pagada;


    return res.status(201).json({
        mensaje: "✅ Reserva actualizada con éxito",
        reserva: reserva,
    });
}


// DELETE Función para eliminar 
function eliminarReserva (req, res) {
    
    const id = req.params.id;

    const index = reservas.findIndex(r => r.id === id);
    if(index === -1) {
        return res.status(404).json({ message: "Reserva no encontrada" });
    }

    const eliminada = reservas.splice(index, 1)[0];
    return res.status(200).json({ message: "✅ Reserva eliminada con éxito", eliminada });
} 


module.exports = {crearReservas, obtenerReservas, obtenerReservaId, actualizarReserva, eliminarReserva};