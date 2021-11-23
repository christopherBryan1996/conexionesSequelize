const Post = require('./models/Post')
const Address = require('./models/Address')
const User = require('./models/User')
const Band = require('./models/Band')

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

//NaN
//el usuario pertenezca varias bandas
//esto crea una nueva tabla en la base de datos que le ponemos cualquier nombre en este caso user_band
//crea una funciones como user.addband user.getBands...etc.
User.belongsToMany(Band,{through:'user_band'})
Band.belongsToMany(User,{through:'user_band'})

