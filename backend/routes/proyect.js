//^segunda parte
//configuracion de la ruta del controlador controllers/project.js
'use strict'
var express =  require('express');
const { getProject } = require('../controllers/project');
//ruta del archivo 
var ProjectController = require('../controllers/project');
//cargar el api
var router = express.Router();

//configurar midware para subir imagenes hace que pase antes de que se carge 
var multipart = require('connect-multiparty');
//direcion donde se guardaran
var multipartMiddleware = multipart({uploadDir:'./uploads'});

//cargado por metodo get home es el metodo que hemos creado
router.get('/home',ProjectController.home);
//cargando el metodo post 
router.post('/test',ProjectController.test);
//cargar el metodo save proyect
router.post('/save-project',ProjectController.saveProject);
//crear metodo que nos devulava un archivo de la bace de datos por la url ?opcional
router.get('/project/:id?',ProjectController.getProject);
//metodo para listar los objetos en la base de datos
router.get('/projects', ProjectController.getProjects);
//actualizar cosas que esten en la vace de datos put es la actualizacion de los objetos 
router.put('/project/:id',ProjectController.updateProject);
//eliminar un proyecto
router.delete('/project/:id',ProjectController.deleteProject);
//si existe req.files-- se mete middleware antes de subir una img --multipartMiddleware
router.post('/upload-image/:id',multipartMiddleware,ProjectController.uploadImage);
//para poner el metodo de la img 
router.get('/get-image/:image', ProjectController.getImageFile);

//con esto router se puede enviar a cualquier archivo 
module.exports = router;