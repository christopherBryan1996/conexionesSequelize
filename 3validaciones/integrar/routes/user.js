const express = require('express')
const router = express.Router()
const User = require('../database/models/User')

router.get('/',(req,res)=>{
    res.send('hello i am User')
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