const express = require('express')
const router = express.Router()
const User = require('../database/models/User')
const Address = require('../database/models/Address')

router.get('/',(req,res)=>{
    User.findAll({
        include: {
            model:Address,
            as:"domicilio",
            attributes:['street']
        },
        attributes:['name','age']
    })
    .then(user=>{
        res.json(user)
    })
})
//Create
router.post('/',(req,res)=>{
    const {name,email,age,role}= req.body
    User.create({
        name:name,
        email:email,
        age:age,
        role: role
    }).then(user=>{
        res.json(user)
    }).catch(err=>{
        res.json(err)
    })
})

module.exports = router