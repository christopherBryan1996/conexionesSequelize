const express = require('express')
const router = express.Router()
const User = require('../database/models/User')
const Address = require('../database/models/Address')

router.get('/',(req,res)=>{
    Address.findAll({
        include: {
            model:User,
            as:"residente",
            attributes:['name','age']
        },
        attributes:['id','street']
    })
    .then(user=>{
        res.json(user)
    })
})

router.post('/',(req,res)=>{
    const {street,residente_id}= req.body
    Address.create({
        street:street,
        residente_id:residente_id
    }).then(user=>{
        res.json(user)
    }).catch(err=>{
        res.json(err)
    })
})

module.exports = router