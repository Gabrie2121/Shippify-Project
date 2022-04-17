const db = require('../config/database')

module.exports.getAll = (req,res)=>{
    const myrows = {}
    let  query = 'SELECT * FROM driver'

    if(req.params.id) query += ` WHERE id = ${req.params.id}`

    db.query(query,(err,result)=>{
        if(err) return err;
        return res.json(result)
    })
}

module.exports.getByName = (req,res)=>{
    let name = req.params.name
    const query = `SELECT * FROM driver WHERE first_name LIKE "${name}%"`
    db.query(query,(err,result)=>{
        if (err) return err;
        return res.json(result)
    }) 
}

module.exports.create = async(req,res)=>{
    const columns = Object.keys(req.body)
    const rows = Object.values(req.body)

    await db.query(
        `INSERT INTO driver (${columns}) VALUES (?,?,?,?,?,?,?,?)`,
        rows,
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

        const code = `UPDATE driver SET company_id = ?, city = ?, first_name = ?, last_name = ?, email = ?, phone = ?, avatar_url = ?, status = ? WHERE id = (?)`

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

        const code = `DELETE FROM driver WHERE id = ?;`

        await db.query(code, [id], (err, result) => {
            if (err) return res.status(400).json(`Bad Request`)

            return res.status(201).json(`Delete Success`)
        })
    } catch (error) {
        res.status(500).json(`Internal Error`)
    }
}
