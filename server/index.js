require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const PORT = process.env.PORT || 5000
const cors = require('cors')
const router = require('./routes/index')

const app = express()

app.use(cors()) // cors - нужен для тогог что бы отправлять запросы с браузера
app.use(express.json()) // это что бы наше приложение могло парсить json фармат
app.use('/api', router)

app.get('/', (req, res) => {
    res.status(200).json({message: 'WORKING'})
})

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
