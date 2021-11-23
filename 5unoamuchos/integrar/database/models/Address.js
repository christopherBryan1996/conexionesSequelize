const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Address extends Model {}

Address.init({
    street: DataTypes.STRING
},{
    sequelize,
    modelName: "address",
    //timestamps: true
})

module.exports = Address