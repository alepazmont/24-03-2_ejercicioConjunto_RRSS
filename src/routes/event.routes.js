const express = require("express");
//EL ROUTER ES EL OBJETO QUE GUARDA TODAS LAS RUTAS.
const eventRouter = express.Router();
//INSTANCIAMOS AL CONTROLADOR PARA USAR LAS FUNCIONES RELATIVAS A CADA RUTA
const {
  getEvent,
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controller/event.controller");

const { isAuth } = require("../middlewares/auth.middleware");

// LAS RUTAS
//nombreDelRouter.get('endpoint', <nombreDeLaFuncion>);

//OBTENER UNA CANCIÓN
eventRouter.get("/get", getEvent);

//OBTENER TODAS LAS CANCIONES
eventRouter.get("/getAll", getEvents);

//CREAR UNA CANCIÓN
eventRouter.post("/create", [isAuth], createEvent);

//UPDATE
eventRouter.patch("/update", [isAuth], updateEvent);

//DELETE
eventRouter.delete("/delete", [isAuth], deleteEvent);

module.exports = eventRouter;
