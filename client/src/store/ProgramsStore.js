import {makeAutoObservable} from 'mobx'

export default class ProgramsStore {
    constructor() {
        this._programs = []
        makeAutoObservable(this)
    }

    setPrograms(programs) {
        this._programs = programs
    }
    
    get programs() {
        return this._programs
    }
}
