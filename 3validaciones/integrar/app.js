const express = require('express')
const app = express()
const sequelize = require('./database/db')
const morgan = require('morgan')

const posts = require('./routes/posts')
const user = require('./routes/user')

app.use(morgan('dev'))//estados
app.use(express.json())//entrada del body
app.use(express.urlencoded())// reconoce objetos de solicitud entrante como cadenas o matrices

app.use('/api/posts',posts)
app.use('/api/user', user)

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