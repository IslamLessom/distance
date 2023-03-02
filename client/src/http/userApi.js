import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode"

export const registration = async (email, password) => {
    const { data } = await $host.post('api/children/teacher', { email, password, role: 'ADMIN' })
    return jwt_decode(data.token.id)
}

export const login = async (email, password) => {
    const { data } = await $host.post('api/children/login', { email, password })
    return jwt_decode(data.token)
}

export const check = async () => {
    const response = await $host.post('api/children/registration')
    return response
}
