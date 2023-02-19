import {makeAutoObservable} from 'mobx'

export default class ProgramsStore {
    constructor() {
        this._programs = [
            {id: 1, name: '“Общее образование в СПО: вариативные модели реализации”(25-ПК)', date: '02.02.2023', active: 'АКТИВНО', telegram: 'https://t.me/kppk11', documents: 'https://cloud.mail.ru/public/G5uC/YfccgkRNJ', works: 'https://cloud.mail.ru/public/jTbq/PqWB7JkvL', sledding: 'http://feosurdo.ru/load/obrazovatelnyj_process/raspisanie_zanjatij_doshkolnogo_otdelenija/3-1-0-64'},
            {id: 2, name: '“Общее образование в СПО: вариативные модели реализации”(25-ПК)', date: '02.02.2023', active: 'АКТИВНО', telegram: 'https://t.me/kppk11', documents: 'https://cloud.mail.ru/public/G5uC/YfccgkRNJ', works: 'https://cloud.mail.ru/public/jTbq/PqWB7JkvL', sledding: 'http://feosurdo.ru/load/obrazovatelnyj_process/raspisanie_zanjatij_doshkolnogo_otdelenija/3-1-0-64'},
            {id: 3, name: '“Общее образование в СПО: вариативные модели реализации”(25-ПК)', date: '02.02.2023', active: 'АКТИВНО', telegram: 'https://t.me/kppk11', documents: 'https://cloud.mail.ru/public/G5uC/YfccgkRNJ', works: 'https://cloud.mail.ru/public/jTbq/PqWB7JkvL', sledding: 'http://feosurdo.ru/load/obrazovatelnyj_process/raspisanie_zanjatij_doshkolnogo_otdelenija/3-1-0-64'},
            {id: 4, name: '“Общее образование в СПО: вариативные модели реализации”(25-ПК)', date: '02.02.2023', active: 'АКТИВНО', telegram: 'https://t.me/kppk11', documents: 'https://cloud.mail.ru/public/G5uC/YfccgkRNJ', works: 'https://cloud.mail.ru/public/jTbq/PqWB7JkvL', sledding: 'http://feosurdo.ru/load/obrazovatelnyj_process/raspisanie_zanjatij_doshkolnogo_otdelenija/3-1-0-64'},
            {id: 5, name: '“Общее образование в СПО: вариативные модели реализации”(25-ПК)', date: '02.02.2023', active: 'АКТИВНО', telegram: 'https://t.me/kppk11', documents: 'https://cloud.mail.ru/public/G5uC/YfccgkRNJ', works: 'https://cloud.mail.ru/public/jTbq/PqWB7JkvL', sledding: 'http://feosurdo.ru/load/obrazovatelnyj_process/raspisanie_zanjatij_doshkolnogo_otdelenija/3-1-0-64'},
            {id: 6, name: '“Общее образование в СПО: вариативные модели реализации”(25-ПК)', date: '02.02.2023', active: 'АКТИВНО', telegram: 'https://t.me/kppk11', documents: 'https://cloud.mail.ru/public/G5uC/YfccgkRNJ', works: 'https://cloud.mail.ru/public/jTbq/PqWB7JkvL', sledding: 'http://feosurdo.ru/load/obrazovatelnyj_process/raspisanie_zanjatij_doshkolnogo_otdelenija/3-1-0-64'},
        ]
        makeAutoObservable(this)
    }

    setPrograms(programs) {
        this._programs = programs
    }
    
    get programs() {
        return this._programs
    }
}
