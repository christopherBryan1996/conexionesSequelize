const express = require('express')
const router = express.Router()
const Post = require('../database/models/Post')

router.get('/',(req,res)=>{
    Post.findAll()
    .then(result=>{
        res.json(result)
    })
})

//create
router.post('/',(req,res)=>{
    const {title,body}= req.body
    Post.create({
        title: title,
        body: body
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