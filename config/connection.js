const mysql = require("mysql")

const connection = mysql.createConnection({
    host: 'localHost',
    port: 3306,
    password: 'unc123',
    user: 'root',
    database: 'burgers'
})

connection.connect(err => {
    if (err){
        console.log(`error connecting: ${err.stack}`)
        return;
    }
    console.log(`connected as id ${connection.threadId}`)
})

module.exports = connection