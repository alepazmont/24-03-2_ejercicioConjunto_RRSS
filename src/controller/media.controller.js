const Media = require("../model/media.model");
//const Contributor = require('../model/contributor.model');
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

// FUNCIONES CRUD

// - CONSULTAR

// -- UNA CANCION
const getMedia = async (req, res, next) => {
  try {
    //1. OBTENGO LA ID QUE HA SOLICITADO EL USUARIO
    const id = req.params.id;
    //2. BUSCO EN LA BBDD POR ID
    const media = await Media.findById(id);
    //3. RESPONDO AL USUARIO
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: media,
    });
  } catch (error) {
    next(error);
  }
};

const getMedias = async (req, res, next) => {
  try {
    //1. BUSCO TODAS LAS TRACKS
    const medias = await Media.find();
    //2. RESPONDO AL USUARIO
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: medias,
    });
  } catch (error) {
    next(error);
  }
};

// - CREAR

const createMedia = async (req, res, next) => {
  try {
    //1. CREAR UNA VARIABLE (TIPO TRACK) QUE RECOJA LOS DATOS QUE ENVÍA EL USUARIO.
    const media = new Media(req.body);
    //2.GUARDAR EN BBDD
    await media.save();
    //3. CONTESTAR AL USUARIO
    res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: media,
    });
  } catch (error) {
    next(error);
  }
};

// - MODIFICAR

const updateMedia = async (req, res, next) => {
  try {
    //1. BUSCAR EL TRACK QUE HAY QUE MODIFICAR.
    const id = req.params.id;
    //2. RECOPILAR LOS DATOS QUE HAY QUE MODIFICAR
    const body = req.body;
    //3. ACTUALIZAR LA FUNCIÓN
    const media = await Track.findByIdAndUpdate(id, body, { new: true });
    // 4. RESPUESTA AL USUARIO
    if (!media) {
      return res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: media,
    });
  } catch (error) {
    next(error);
  }
};

// - DELETE

const deleteMedia = async (req, res, next) => {
  try {
    const id = req.params.id;
    const media = await Media.findByIdAndDelete(id);

    if (!media) {
      return res.status(404).json({ message: "Media no encontrada" }); // esto sería un mensaje de error personalizado.
    }

    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: media,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getMedia, getMedias, createMedia, updateMedia, deleteMedia };
