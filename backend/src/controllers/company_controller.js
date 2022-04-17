const db = require('../config/database')

module.exports.getAll = (req,res)=>{
    const myrows = {}
    let  query = 'SELECT * FROM company'

    if(req.params.id) query += ` WHERE id = ${req.params.id}`

    db.query(query,(err,result)=>{
        if(err) return err;
        return res.json(result)
    })
}

module.exports.getByName = (req,res)=>{
    let name = req.params.name
    const query = `SELECT * FROM company WHERE name LIKE "${name}%"`
    db.query(query,(err,result)=>{
        if (err) return err;
        return res.json(result)
    }) 
}

module.exports.create = async(req,res)=>{
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
}

module.exports.update = async(req,res)=> {
    try {
        const items = Object.values(req.body)
        items.push(req.params.id)

        const code = `UPDATE company SET name = ?, city = ?, status = ?, plan_type = ? WHERE id = (?)`

        await db.query(code, items, (err, result) => {
            if (err) return res.status(400).json(`Bad Request`)

            return res.status(201).json(`Update Success`)
        })
    } catch (error) {
        res.status(500).json(`Internal Error`)
    }
}

module.exports.delete = async(req,res)=> {
    try {
        const id = req.params.id

        const code = `DELETE FROM company WHERE id = ?;`

        await db.query(code, [id], (err, result) => {
            if (err) return res.status(400).json(`Bad Request`)

            return res.status(201).json(`Delete Success`)
        })
    } catch (error) {
        res.status(500).json(`Internal Error`)
    }
}
