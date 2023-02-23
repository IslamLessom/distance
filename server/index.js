require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const PORT = process.env.PORT || 5000

const app = express()

//функция для подключения к базе данных

const start = async () => {
    try {
        await sequelize.authenticate() //подключение к бд
        await sequelize.sync() //будет проверять состояние базы данных со схемой данных
        app.listen(PORT,() => console.log(`SERVER START ${PORT}`))
    } catch (e) {
        console.log(e)
    }
} 

start()
