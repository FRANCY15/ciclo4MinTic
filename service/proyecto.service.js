const Project = require('../model/proyectoModel')
const User = require('../model/usuariosModel')
const Advance = require('../model/AvancesModel')

const { v4: uuidv4 } = require('uuid');



const addUserProject = async (identificacion, nombreProyecto) => {
    const user = await User.findOne({ identificacion })
    if (user && user.estado === "Activo") {
        const project = await Project.findOne({ nombre: nombreProyecto })
        if (project && project.estado=="Activo") {
            if (project.integrantes.find(i => i == user._id)) {
                return "El usuario ya pertenece al proyecto indicado"
            } else {
                await Project.updateOne({ nombre: nombreProyecto }, { $push: { integrantes: user._id } })
                return "Usuario adicionado correctamente"   
            }
        } else {
            return "Proyecto no valido para adicionar un integrante, consulte al administrador"
        }
    } else {
        return "Usuario no valido"
    }

}


// const updateAdvance= async (identificacion, nombreProyecto) => {
//     const user = await User.findOne({ identificacion })
//     if (user && user.estado === "Activo") {
//         const project = await Project.findOne({ nombre: nombreProyecto })
//         if (project && project.estado=="Activo") {
//             if (project.integrantes.find(i => i == user._id)) {
//                 return "El usuario ya pertenece al proyecto indicado"
//             } else {
//                 await advance.updateOne({ nombre: nombreProyecto }, { $set: { descripcion: Advance._id } })
//                 return "Usuario adicionado correctamente"   
//             }
//         } else {
//             return "Proyecto no valido para adicionar un integrante, consulte al administrador"
//         }
//     } else {
//         return "Usuario no valido"
//     }

// }

const updateAdvance = async (identificacion, nombreProyecto, idAdvance) => {
    const user = await User.findOne({ identificacion })
    if (user && user.estado === "Activo") {
        const project = await Project.findOne({nombre: nombreProyecto})
        if (project && project.estado=="Activo") {
            const advance = await Advance.findOne({idAdvance})
            if (project.avances.find(i => i == advance._id)) {
                await Advance.updateOne({ idAdvance: advance._id}, { $addToSet: { descripcion: advance.descripcion } })
            }else{
            }  
        }else {
            return "Proyecto no valido para adicionar un avance, consulte al administrador"
        }
    } else {
        return "Usuario no valido"
    }

}

const addAdvance = async (identificacion, nombreProyecto, idAdvance) => {
    const user = await User.findOne({ identificacion })
    if (user && user.estado === "Activo") {
        const project = await Project.findOne({nombre: nombreProyecto})
        if (project && project.estado=="Activo") {
            const advance = await Advance.findOne({idAdvance})
            if (project.avances.find(i => i == advance._id)) {
                return "El avance ya se relacionó al proyecto indicado"
            } else {
                await Project.updateOne({ nombre: nombreProyecto }, { $push: { idAdvance: advance._id } })
                return "Avance adicionado correctamente"   
            }
        } else {
            return "Proyecto no valido para adicionar un avance, consulte al administrador"
        }
    } else {
        return "Usuario no valido"
    }

}
// const getProgress = async (identificacion, idProyecto ) => {
//     const user = await User.findOne({identificacion})
//     if (user && user.estado === "Activo") {
//         const project = await Project.findOne({idProyecto})
//         if (project && project.estado=="Activo") {
//             if (project.integrantes.find(i => i == user._id)) {
//                 await project.avances.find({})
//             } else {
//                 return "Usuario adicionado correctamente"
//             }
//         } else {
//             return "Proyecto no valido para adicionar un integrante, consulte al administrador"
//         }
//     } else {
//         return "Usuario no valido"
//     }
// }

const createProject = (project) => {
    const nuevoProyecto = new Project(project);
    nuevoProyecto.identificador = uuidv4()
    return nuevoProyecto.save()
        .then(u => "Proyecto creado")
        .catch(err => console.log(err));
}

const createAdvance = (advance) => {
    const nuevoAvance = new Advance(advance);
    return nuevoAvance.save()
        .then(u => "Avance registrado correctamente")
        .catch(err => console.log(err));
}
const deleteProject = (nombreProyecto) => {
    return Project.deletOne({ nombre: nombreProyecto }, { activo: false })
        .then(u => "Proyecto 'eliminado'")
        .catch(err => "Fallo la eliminacion");
        
}

const proyectos = async () => await Project.find({}).populate("integrantes, avances")

const getProject = async (nombre) => await Project.findOne({ nombre })
const getAdvance = async (idProyecto) => await Advance.find({ idProyecto })

module.exports = {
    addUserProject,
    updateAdvance,
    // getProgress,
    getProject,
    proyectos,
    deleteProject,
    createProject,
    createAdvance,
    getAdvance,
    addAdvance
}