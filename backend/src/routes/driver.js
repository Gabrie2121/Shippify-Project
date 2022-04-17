const express = require('express')
const db = require('../config/database')
const routes = express.Router()

routes.get('/',(req,res)=>{
    const query = db.query('SELECT * FROM company')
    query.on('result',(row)=>{
        return res.json(row)
    })  
})

module.exports = routes;