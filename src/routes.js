const express = require('express');

const routes = express.Router();

const userController = require('./controllers/userControllers');
const filaController = require('./controllers/filaControllers');

routes.post('/createUser', userController.create);
routes.put('/addToLine/:id', filaController.adding);
routes.get('/findPosition/:email', filaController.find);
routes.get('/showLine', filaController.show);
routes.get('/filterLine/:genero', filaController.filter);
routes.delete('/popLine', filaController.exit);

module.exports = routes;
