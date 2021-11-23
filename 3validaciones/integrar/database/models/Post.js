const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db')

class Post extends Model {}
Post.init({
    // columnas
    title: DataTypes.STRING,
    body: DataTypes.TEXT
},{
    // base de datso y nobre de la tabla
    sequelize,
    modelName: 'post'
})

module.exports = Post