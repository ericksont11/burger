const mysql = require("mysql")

let connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: 'kavfu5f7pido12mr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		port: 3306,
		user: 'kdfbriae932a0k0p',
		password: 'qd099wr4w9e6xjmy',
		database: 'qxufz421wpu7emfo'
	});
}

connection.connect(err => {
    if (err){
        console.log(`error connecting: ${err.stack}`)
        return;
    }
    console.log(`connected as id ${connection.threadId}`)
})

module.exports = connection