import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode"

export const registration = async (email, password) => {
    const { data } = await $host.post('api/children/teacher', { email, password, role: 'ADMIN' })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token.id)
}

export const login = async (email, password) => {
    const { data } = await $host.post('api/children/login', { email, password })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const { data } = await $authHost.get('api/children/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
