const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db')

class User extends Model{}
//creamos columnas
User.init({
    name: {
        type: DataTypes.STRING,
        allowNull:false,//para que no tenga null
        validate:{
            notNull:{
                msg: 'El campo no puede ser nulo'
            },
            isAlpha:{//solo letras
                args:true,
                msg: 'El nombre solo puede contener letras'
            }, 
            len:{ //tamaño 
                args: [3,255],
                msg: 'El nombre debe contener mas de 3 caracteres'
            }
        },
    },
    email: {
        type:DataTypes.STRING,
        validate:{
            isEmail:{
                args: true,
                msg: 'debe ser un correo valido'
            }
        }
    },
    age: {
        type: DataTypes.INTEGER,
        validate:{
            isInt:{
                args: true,
                msg: 'debe ser un numero la edad'
            },
            min:{
                args: 1,
                msg: 'la edad tiene que ser mayor a uno'
            },
            max:{
                args:150,
                msg: ' la edad debe ser real'
            },
            //para agregar funciones
            // espar(value){
            //     if(value%2){
            //         throw new Error('La edad tiene que ser par')
            //     }
            // }
        }
    },
    // si es 0 es usuario y si es 1 admi
    role:{
        type: DataTypes.INTEGER,
        defaultValue:0
    }
},{
    sequelize,
    modelName: 'user',
    //timestamps: true
})

module.exports = User