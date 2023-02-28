import { $authHost, $host } from ".";

export const registration = async (email, password) => {
    const response = await $host.post('api/children/teacher', { email, password, role: 'ADMIN' })
    return response
}

export const login = async (email, password) => {
    const response = await $host.post('api/children/login', { email, password })
    return response
}

export const check = async () => {
    const response = await $host.post('api/children/registration')
    return response
}
