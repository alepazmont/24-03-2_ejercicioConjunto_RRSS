const express = require('express');
//EL ROUTER ES EL OBJETO QUE GUARDA TODAS LAS RUTAS.
const eventRouter = express.Router();
//INSTANCIAMOS AL CONTROLADOR PARA USAR LAS FUNCIONES RELATIVAS A CADA RUTA
const { getEvent, getEvents, createEvent, updateEvent, deleteEvent } = require('../controller/event.controller');

const { isAuth } = require('../middlewares/auth.middleware');

// LAS RUTAS
//nombreDelRouter.get('endpoint', <nombreDeLaFuncion>);

//OBTENER UNA CANCIÓN
eventRouter.get('/:id', getEvent);

//OBTENER TODAS LAS CANCIONES
eventRouter.get('/', getEvents);

//CREAR UNA CANCIÓN
eventRouter.post('/', [isAuth], createEvent);

//UPDATE
eventRouter.patch('/:id', [isAuth], updateEvent);

//DELETE
eventRouter.delete('/:id', [isAuth], deleteEvent);


module.exports = eventRouter;