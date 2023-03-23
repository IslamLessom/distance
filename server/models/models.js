const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    first_name: { type: DataTypes.STRING },
    father_name: { type: DataTypes.STRING },
    group: { type: DataTypes.STRING },
    schedule: { type: DataTypes.STRING },
    list_teacher: { type: DataTypes.STRING },
    images: { type: DataTypes.STRING},
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: 'USER' },
})

const Programs = sequelize.define('programs', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    images: { type: DataTypes.STRING },
    date: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    active: { type: DataTypes.STRING },
    document: { type: DataTypes.STRING },
    telegram: { type: DataTypes.STRING },
    schedule: { type: DataTypes.STRING },
    work: { type: DataTypes.STRING }
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

Programs.hasMany(ProgramInfo, { as: 'info' })
ProgramInfo.belongsTo(Programs)

module.exports = {
    User,
    Programs,
    ProgramInfo,
}
