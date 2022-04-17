const mysql = require('mysql')
const config = require("./config.json")
var connection = mysql.createConnection(config)

connection.connect((err)=>{
    if(err){
        console.log(`error connection: ${err}`)
        return
    }
    console.log(`connected as id ${connection.threadId}`)
})

module.exports = connection