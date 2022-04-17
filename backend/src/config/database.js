const mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: 'vehiclechallenge'
})

connection.connect((err)=>{
    if(err){
        console.log(`error connection: ${err}`)
        return
    }
    console.log(`connected as id ${connection.threadId}`)
})

module.exports = connection