import axios from 'axios'

//обычные запросы которые не требуют авторизации 
const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

//запросы с авторизацией
const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}