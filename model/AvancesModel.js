const { Schema, model} = require('mongoose');
const project = require('./proyectoModel')
 
const Avances = new Schema({

    idProyecto: {
        type: String,
        required: true
      },
    fechaAvance: {
        type: Date,
        default: new Date()
    },
    descripcion: String,
    observaciones: String,
    integrantes: {
        type: Schema.Types.ObjectId,
        ref: "usuarios",
        required: true
      },

    // {
    // toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    // toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
    //   }
});


// project.virtual('avance', {
//   ref: 'Avance',
//   localField: '_id',
//   foreignField: 'proyecto',
// });

module.exports = model('avance', Avances, "avance");