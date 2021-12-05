const { Schema, model } = require('mongoose')


const project = new Schema({
    identificador: {
        type: String,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    objetivosGenerales: String,
    objetivosEspecificos: [String],
    presupuesto: Number,
    fecha_inicio: {
        type: Date,
        default: new Date()
    },
    fecha_terminacion: Date,
    estado: {
        type: String,
        default: "inactivo"
    },
    fase: String,
    lider: String,
    integrantes: [{
        type: Schema.Types.ObjectId,
        ref: "usuarios"
    }],
    avances: [{
        type: Schema.Types.ObjectId,
        ref: "avance"
    }]
    },
    {
        timestamps: true
    }
)
module.exports = model('proyectos', project)

// const { Schema, model } = require('mongoose');

// const Proyectos = newSchema({
//     idProyecto: {
//         type: Number,
//         required: true,
//         unique: true
//     },
//     nombreDelProyecto: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     objetivosGenerales: [{ type: String }],
//     objetivosEspecificos: [{ type: String }],
//     presupuesto: {
//         type: Number,
//         required: true
//     },
//     fechaInicio: {
//         type: Date,
//         default: newDate()
//     },
//     fechaTerminacion: {
//         type: Date,
//         default: newDate()
//     },
//     idDelLider: {
//         type: Number,
//         required: true,
//         unique: true
//     },
//     nombreLider: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     estadoProyecto: {
//         type: String,
//         default: "Inactivo"
//     },
//     faseProyecto: {
//         type: String,
//         default: "Inicial"
//     },
//     estudiantesInscritos: [{
//         identificacion: {
//             type: String,
//             required: true,
//             unique: true
//         },
//         nombre: {
//             type: String,
//             required: true
//         },
//         apellido: {
//             type: String,
//             required: true
//         },
//     }]
// });
// module.exports = model('Proyecto', Proyectos);
