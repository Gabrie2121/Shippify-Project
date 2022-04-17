const express = require('express')
const routes = express.Router()

const driver_controller = require("../controllers/driver_controller")

routes.get('/', driver_controller.getAll)

routes.get('/:id', driver_controller.getAll)

routes.get('/name/:name', driver_controller.getByName)

routes.post('/', driver_controller.create)

routes.put('/:id', driver_controller.update)

routes.delete('/:id', driver_controller.delete)

module.exports = routes;