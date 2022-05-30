const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'pavel',
    password: 'pavel',
    database: 'rest',
    jwt: 'jwt-key'
})

connection.connect((error) => {
    if(error) {
        return console.log('Ошибка подключения к БД')
    } else {
        return console.log('Подключение успешно')
    }
})

module.exports = connection

