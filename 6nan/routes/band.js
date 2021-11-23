const express =  require('express')
const router = express.Router()
const Band = require('../database/models/Band')
const User = require('../database/models/User')


router.get('/',async(req,res)=>{
    const {name,type,users}= req.params
    let bands = await Band.create({
        name:'hello',
        type: 'hip hop',
        users: [
            {name: 'lucia',age:10,email:'vjvjv@jdjd.com'},
            {name: 'luci',age:11,email:'vjvjv@jdjd.com'}
        ]
    },{
        include: User
    })
    res.json(bands)
})

router.get('/varios',async(req,res)=>{
    const {name,type,users}= req.params
    let user1= await User.create({name: 'lucio',age:10,email:'ffsgs@jdjd.com'})
    let user2= await User.create({name: 'luci',age:19,email:'ffsgs@jdjd.com'})

    let band1= await Band.create({name:'delgados', type:'rock'})
    band1.addUsers([user1,user2])
    res.json(band1)
    
})
router.get('/un',async(req,res)=>{
    //agregar un usuario a las bandas
    let user3= await User.create({name: 'paula',age:19,email:'ffsgs@jdjd.com'})
    let agregado=await user3.setBands([1,2])

    res.json(agregado)

})
module.exports= router