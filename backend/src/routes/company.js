const express = require('express')
const routes = express.Router()

const company_controller = require("../controllers/company_controller")

routes.get('/', company_controller.getAll)

routes.get('/:id', company_controller.getAll)

routes.get('/name/:name', company_controller.getByName)

routes.post('/', company_controller.create)

routes.put('/:id', company_controller.update)

routes.delete('/:id', company_controller.delete)

module.exports = routes;