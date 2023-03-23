
import {$host } from '.';

export const fetchPrograms = async () => {
    const { data } = await $host.get('api/program')
    return data
}

export const fetchOnePrograms = async (id) => {
    const { data } = await $host.get('api/program/' + id)
    return data
}