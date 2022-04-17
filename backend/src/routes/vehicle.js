const express = require('express')
const routes = express.Router()

const vehicle_controller = require("../controllers/vehicle_controller")

routes.get('/', vehicle_controller.getAll)

routes.get('/:id', vehicle_controller.getAll)

routes.get('/name/:name', vehicle_controller.getByName)

routes.post('/', vehicle_controller.create)

routes.put('/:id', vehicle_controller.update)

routes.delete('/:id', vehicle_controller.delete)

module.exports = routes;