const { Schema, model} = require('mongoose');
 
const Inscripciones = new Schema({
    idInscripcion: {
        type: String,
        required: true,
        unique: true
    },
    idProyecto: {
        type: String,
        required: true,
        unique: true
    },
    identificacion: {
        type: String,
        required: true,
        unique: true
    },
    estadoInscripcion: {
        type: String,
        default: "Pendiente"
    },
    fechaIngreso: {
        type: Date,
        default: new Date()
    },
    fechaEgreso: {
        type: Date,
        default: new Date()
    }
});
module.exports = model('Inscripcion', Inscripciones);