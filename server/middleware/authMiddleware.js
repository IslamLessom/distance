// здесь декодируется токен и проверяется на валидность(зареган пользовательь или нет)
const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(401).json({ message: 'Не авторизован' })
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY) //verify проверяет токен на валидность
        req.user = decoded //добавляем данные которые мы вытащили из decoded в user таким образом мы можем обрашаться к user за этими данными
        next()
    } catch (e) {
        res.status(401).json({ message: 'Не авторизован' })
    }
}