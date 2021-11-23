const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db')

class User extends Model{}
//creamos columnas
User.init({
    name: DataTypes.STRING,
    birthday: DataTypes.DATE
},{
    sequelize,
    modelName: 'user'
})

module.exports = User