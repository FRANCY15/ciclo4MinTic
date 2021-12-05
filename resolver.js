const { addUserProject,
    getProject,
    proyectos,
    deleteProject,
    createProject,
    createAdvance,
    // getProgress,
    getAdvance,
addAdvance,
updateAdvance} = require('./service/proyecto.service');
const { buscarUsuarioPorIdentificacion } = require('./service/usuarios.service')
const Project = require('./model/proyectoModel')
const User = require('./model/usuariosModel')
const Advance = require('./model/AvancesModel')
let aes256 = require('aes256');
const { update } = require('./model/proyectoModel');


const listUsuarios = [
    {
        nombre: 'Rocio',
        identificacion: 123456789,
        estado: 'activo',
        clave: 'claveFacil',
        email: 'ramon@gmail.com',
        perfil: 'estudiante'
    },
    {
        nombre: 'Ernesto',
        identificacion: 98765,
        estado: 'inactivo',
        clave: 'ClaveDificil',
        email: 'ernesto@gmail.com',
        perfil: 'estudiante'
    },
    {
        nombre: 'Daniel Saavedra',
        identificacion: 123456789,
        estado: 'activo',
        email: 'daniel@gmail.com',
        perfil: 'lider'
    },

]
const key = 'UNACLAVE';

const resolvers = {
    Query: {
        usuarios: () => listUsuarios,
        usuario: (parent, args, context, info) => buscarUsuarioPorIdentificacion(args.identificacion),
        proyectos: async () => proyectos(),
        getProject: async (parent, args, context, info) => getProject(args.nombre),
        getAdvance: async (parent, args, context, info) => getAdvance(args.idProyecto)
    },
    Mutation: {
        createUser: (parent, args, context, info) => {
            const { clave } = args.user;
            const nuevoUsuario = new User(args.user);
            const encryptedPlainText = aes256.encrypt(key, clave);
            nuevoUsuario.clave = encryptedPlainText
            return nuevoUsuario.save()
                .then(u => "usuario creado")
                .catch(err => console.log(err));
        },
        activeUser: (parent, args, context, info) => {
            return User.updateOne({ identificacion: args.identificacion }, { estado: "Activo" })
                .then(u => "Usuario activo")
                .catch(err => "Fallo la activacion");
        },
        deleteUser: (parent, args, context, info) => {
            return User.deleteOne({ identificacion: args.ident })
                .then(u => "Usuario eliminado")
                .catch(err => "Fallo la eliminacion");
        },
        deleteProject: (parent, args, context, info) => deleteProject(args.nombreProyecto),
        insertUserToProject: async (parent, args, context, info) => addUserProject(args.identificacion, args.nombreProyecto),
        createUser: (parent, args, context, info) => {
            const { clave } = args.user;
            const nuevoUsuario = new User(args.user);
            const encryptedPlainText = aes256.encrypt(key, clave);
            nuevoUsuario.clave = encryptedPlainText
            return nuevoUsuario.save()
                .then(u => "usuario creado")
                .catch(err => console.log(err));
        },
        createProject: (parent, args, context, info) => createProject(args.project),
        createAdvance: (parent, args, context, info) => createAdvance(args.advance),
        addAdvance: (parent, args, context, info) => addAdvance(args.identificacion, args.nombreProyecto, args.idAvance),
        updateAdvance:(parent, args, context, info) => updateAdvance(args.identificacion, args.nombreProyecto, args. idAdvance, args.descripcion)
    }
}
module.exports = resolvers