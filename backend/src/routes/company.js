const express = require('express')
const db = require('../config/database')
const routes = express.Router()

//getAll
routes.get('/',(req,res)=>{
    const myrows = {}
    const query = 'SELECT * FROM company'
    db.query(query,(err,result)=>{
        if(err) return err;
        return res.json(result)
    })
})

routes.get('/getByName/:name',(req,res)=>{
    let name = req.params.name
    const query = `SELECT * FROM company WHERE name LIKE "${name}%"`
    db.query(query,(err,result)=>{
        if (err) return err;
        return res.json(result)
    }) 
})

//create
routes.post('/create', async(req,res)=>{
    console.log(req.body )
    const company = {
        name: req.body.name,
        city: req.body.city,
        status: req.body.status,
        plan_type: req.body.plan_type,
        creation_date : req.body.creation_date,
    };
    await db.query(
        'INSERT INTO company (id,name, city, status, plan_type,creation_date) VALUES (?,?,?,?,?,?)',
        [null,company.name,company.city,company.status,company.plan_type,company.creation_date],
        (err,result)=>{
            if(err){
                res.status(500).send({error: err})
                return
            }
            res.status(201).send({
                message: "Company included successfully",
                product: result
            })
        }
    )
})










module.exports = routes;