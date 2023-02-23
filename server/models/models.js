const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    firs_name: { type: DataTypes.STRING },
    father_name: { type: DataTypes.STRING },
    group: { type: DataTypes.STRING },
    schedule: { type: DataTypes.STRING },
    list_teacher: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: 'USER' },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    images: { type: DataTypes.STRING }
})

const Programs = sequelize.define('programs', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    images: { type: DataTypes.STRING },
    date: { type: DataTypes.DATE },
    description: { type: DataTypes.STRING },
    active: { type: DataTypes.STRING }
})

const ProgramInfo = sequelize.define('program_info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    document: { type: DataTypes.STRING },
    telegram: { type: DataTypes.STRING },
    schedule: { type: DataTypes.STRING },
    work: { type: DataTypes.STRING }
})

User.hasMany(Programs)
Programs.belongsTo(User)

Programs.hasMany(ProgramInfo)
ProgramInfo.belongsTo(Programs)

module.exports = {
    User,
    Programs,
    ProgramInfo,
}