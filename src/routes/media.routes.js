const express = require("express");
//EL ROUTER ES EL OBJETO QUE GUARDA TODAS LAS RUTAS.
const mediaRouter = express.Router();
//INSTANCIAMOS AL CONTROLADOR PARA USAR LAS FUNCIONES RELATIVAS A CADA RUTA
const {
  getMedia,
  getMedias,
  createMedia,
  updateMedia,
  deleteMedia,
} = require("../controller/media.controller");

const { isAuth } = require("../middlewares/auth.middleware");

// LAS RUTAS
//nombreDelRouter.get('endpoint', <nombreDeLaFuncion>);

//OBTENER UNA CANCIÓN
mediaRouter.get("/get", getMedia);

//OBTENER TODAS LAS CANCIONES
mediaRouter.get("/getAll", getMedias);

//CREAR UNA CANCIÓN
mediaRouter.post("/create", [isAuth], createMedia);

//UPDATE
mediaRouter.patch("/update", [isAuth], updateMedia);

//DELETE
mediaRouter.delete("/delete", [isAuth], deleteMedia);

module.exports = mediaRouter;
