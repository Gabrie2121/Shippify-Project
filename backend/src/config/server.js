const port = 8080
const express = require('express')
const cors = require('cors')




const server = express()

server.use(express.json())
server.use(cors())

const routeCompany = require('../routes/company')
const routeDriver = require('../routes/driver')
const routeVehicle = require('../routes/vehicle')

server.use('/company', routeCompany)
server.use('/driver', routeDriver)
server.use('/vehicle', routeVehicle)


server.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})

module.exports = server