const express = require('express')
const router = express.Router()
const User = require('../database/models/User')
const Address = require('../database/models/Address')
const Post = require('../database/models/Post')
const Band = require('../database/models/Band')

router.get('/',(req,res)=>{
    User.findAll({
        include: [{
            model:Address,
            as:"domicilio",
            attributes:['street']
        },{
            model: Post,
            as:'publicaciones',
            attributes:['title','body']
        }],
        attributes:['name','age']
    })
    .then(user=>{
        res.json(user)
    })
})
// ver direccion de usuario
router.get('/:id/domicilio',(req,res)=>{
    const id= req.params.id
    User.findByPk(id).then(user=>{
        user.getDomicilio().then(domicilio=>{
            res.json(domicilio)
        })
    })

})
//ver publicaciones
router.get('/:id/publicaciones',(req,res)=>{
    const id= req.params.id
    User.findByPk(id).then(user=>{
        user.getPublicaciones().then(publicaciones=>{
            res.json(publicaciones)
        })
    })
})
router.get('/:id/bandas',(req,res)=>{
    const id= req.params.id
    User.findByPk(id).then(user=>{
        user.getBands({attributes:['name','type']}).then(bandas=>{
            res.json(bandas)
        })
    })
})

//Create
//forma que muestra solo la creacion del usuario
// router.post('/',(req,res)=>{
//     const {name,email,age,role,street}= req.body
//     User.create({
//         name:name,
//         email:email,
//         age:age,
//         role: role
//     }).then(user=>{
//         Address.create({ street: street}).then(street=>{
//             user.setDomicilio(street).then(result=>{
//                 res.json(user)
//             })
//         })
//     }).catch(err=>{
//         res.json(err)
//     })
// })
//muestra la creacion del usuario y del modelo Addresses
router.post('/',(req,res)=>{
    const {name,email,age,role,street}= req.body
    User.create({
        name:name,
        email:email,
        age:age,
        role: role,
        domicilio:{
            street: street
        }
    },{
        include: 'domicilio'
    }).then(user=>{
        res.json(user)
    }).catch(err=>{
        res.json(err)
    })
})

module.exports = router