

const { Schema, model } = require('mongoose')

const usuario = new Schema({
    nombre: {
        type: String,
        required: true
    },
    identificacion: {
        type: Number,
        unique: true,
        required: true
    },
    perfil: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        default: "Inactivo"
    },
    email:{
        type: String,
        unique:true
    },
    clave: {
        type: String,
        required: true
    }
})
module.exports = model('usuarios', usuario,"usuarios")

// Usuarios:

// const { Schema, model} = require('mongoose');
 
// const Usuarios = new Schema({
//     identificacion: {
//         type: Number,
//         unique: true,
//         required: true
//     },
//     nombre: {
//         type: String,
//         required: true
//     }, 
//     apellido: {
//         type: String,
//         required: true
//     },
//     rol: {
//         type: String,
//         required: true
//     },
//     correoElectronico: {
//         type: String,
//         required: true
//     },
//     contrasegna: {
//         type: String,
//         required: true
//     },
//     estado: {
//         type: String,
//         default: "Pendiente"
//     },
// });
// // Asignamos a cada una de las colecciones su modelo respectivo y lo exportamos
// module.exports = model('Usuario', Usuarios)