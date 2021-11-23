const express = require('express')
const app = express()
const sequelize = require('./database/db')
const morgan = require('morgan')
//const User = require('./database/models/User')
const posts = require('./routes/posts')
app.use(morgan('dev'))//estados
app.use(express.json())//entrada del body
app.use(express.urlencoded())// reconoce objetos de solicitud entrante como cadenas o matrices

app.use('/api/posts',posts)

app.get('/',(req,res)=>{
    res.send('hola mundo')
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