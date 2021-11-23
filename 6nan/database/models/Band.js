const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db')

//Una banda de musuca
class Band extends Model {}

Band.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING
},{
    sequelize,
    modelName: 'band'
})

module.exports = Band
