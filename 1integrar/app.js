const express = require('express')
const app = express()
const sequelize = require('./database/db')
const morgan = require('morgan')
const User = require('./database/models/user')

app.use(morgan('dev'))

app.get('/',(req,res)=>{
    User.create({
        name: 'Bryan',
        birthday: new Date(1996,20,6)
    }).then(user=> res.json(user))
})

app.listen(3002,()=>{
    console.log('listeng to 3002')
    sequelize.authenticate()
    .then(()=>console.log('entraste a la base de datos'))
    .catch(e=>console.log('error en la base de datos'))
    sequelize.sync({force:false})
    .then(()=>console.log('creada la tabla'))
    .catch(e=> console.log('error de creacion de tabla'))
})