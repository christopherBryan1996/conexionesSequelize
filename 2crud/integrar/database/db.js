const {Sequelize} = require('sequelize')
const {DB_USER,DB_PASSWORD,DB_HOST}=require('../config')


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/repaso`,{
     logging: false,
})


module.exports = sequelize