const Post = require('./models/Post')
const Address = require('./models/Address')
const User = require('./models/User')

// Uno a uno

//Usuario tiene una direccion
// añadir una clave forania userId a la tabla addresses
User.hasOne(Address,{as:"domicilio", foreignKey:"residente_id"});
Address.belongsTo(User,{as:"residente", foreignKey:"residente_id"})

//Uno a muchos, 1 a N
// usuario va a tener muchos posts o publicaciones
//añade una tabla userId
User.hasMany(Post,{as:'publicaciones', foreignKey:'autorId'})
Post.belongsTo(User,{as:'autor', foreignKey:'autorId'})

