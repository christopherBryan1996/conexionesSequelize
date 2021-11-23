const express = require('express')
const router = express.Router()
const Post = require('../database/models/Post')
const User = require('../database/models/User')

router.get('/',(req,res)=>{
    Post.findAll({
        include:{
            model:User,
            as:'autor',
            attributes:['name','age']
        },
        attributes:['id','title','body']
    })
    .then(result=>{
        res.json(result)
    })
})

//create
router.post('/',(req,res)=>{
    const {title,body,autorId}= req.body
    Post.create({
        title: title,
        body: body,
        autorId:autorId
    }).then((post)=>{
        res.json(post)
    }).catch(e=> console.error('error de creacion'))
})
//read
router.get('/:id',(req,res)=>{
    const id = req.params.id
    Post.findByPk(id).then(post=>{
        res.json(post)
    })
})

//update
router.patch('/:id',(req,res)=>{
    const id = req.params.id
    const {title, body} = req.body
    //en este metodo se pasan dos parametros 
    Post.update({
        //campos que se van a modificar
        title:title,
        body:body
    },{
        //condicion
        where:{
            id: id
        }
    }).then(result=>{
        res.json(result)
    })
})
//delete
router.delete('/:id',(req,res)=>{
    const id = req.params.id
    Post.destroy({
        where:{
            id: id
        }
    }).then(result=>{
        res.json(result)
    })
})

module.exports =router