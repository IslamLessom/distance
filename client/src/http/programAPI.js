import { $authHost, $host } from '.';

export const createPrograms = async (program) => {
    const { data } = await $authHost.post('api/program', program)
    return data
}

export const fetchPrograms = async () => {
    const { data } = await $host.get('api/program')
    return data
}

export const fetchOnePrograms = async (id) => {
    const { data } = await $host.get('api/program/' + id)
    return data
}