const Event = require("../model/event.model");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

const getEvent = async (req, res, next) => {
  try {
    //1. OBTENGO LA ID QUE HA SOLICITADO EL USUARIO
    const id = req.params.id;
    //2. BUSCO EN LA BBDD POR ID
    const event = await Event.findById(id).populate("event");
    //3. RESPONDO AL USUARIO
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: event,
    });
  } catch (error) {
    next(error);
  }
};

const getEvents = async (req, res, next) => {
  try {
    //1. BUSCO TODAS LAS TRACKS
    const events = await Event.find().populate("media");
    //2. RESPONDO AL USUARIO
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: events,
    });
  } catch (error) {
    next(error);
  }
};

// - CREAR

const createEvent = async (req, res, next) => {
  try {
    //1. CREAR UNA VARIABLE (TIPO TRACK) QUE RECOJA LOS DATOS QUE ENVÍA EL USUARIO.
    const event = new Event(req.body);
    //2.GUARDAR EN BBDD
    await event.save();
    //3. CONTESTAR AL USUARIO
    res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: event,
    });
  } catch (error) {
    next(error);
  }
};

// - MODIFICAR

const updateEvent = async (req, res, next) => {
  try {
    //1. BUSCAR EL TRACK QUE HAY QUE MODIFICAR.
    const id = req.params.id;
    //2. RECOPILAR LOS DATOS QUE HAY QUE MODIFICAR
    const body = req.body;
    //3. ACTUALIZAR LA FUNCIÓN
    const event = await Event.findByIdAndUpdate(id, body, { new: true });
    // 4. RESPUESTA AL USUARIO
    if (!event) {
      return res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: event,
    });
  } catch (error) {
    next(error);
  }
};

// - DELETE

const deleteEvent = async (req, res, next) => {
  try {
    const id = req.params.id;
    const event = await Event.findByIdAndDelete(id);

    if (!event) {
      return res.status(404).json({ message: "Event no encontrada" }); // esto sería un mensaje de error personalizado.
    }

    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: event,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getEvent, getEvents, createEvent, updateEvent, deleteEvent };
