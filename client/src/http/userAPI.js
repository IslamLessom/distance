import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode"

export const registration = async (name, first_name, father_name, group, schedule, list_teacher, images, email, password, role) => {
    const { data } = await $host.post('api/children/teacher', { name, first_name, father_name, group, schedule, list_teacher, images, email, password, role })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const { data } = await $host.post('api/children/login', { email, password })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async (name, first_name, father_name, group, schedule, list_teacher, images, email, password, role) => {
    const { data } = await $authHost.get('api/children/student', { name, first_name, father_name, group, schedule, list_teacher, images, email, password, role })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
