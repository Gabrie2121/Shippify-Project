const port = 8080
const express = require('express')
const routeCompany = require('../routes/company')
const routeDriver = require('../routes/driver')
const routeVehicle = require('../routes/vehicle')

const server = express()
server.use(express.json())

server.use('/company', routeCompany)
server.use('/driver', routeDriver)
server.use('/vehicle', routeVehicle)


server.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})

module.exports = server