const { gql } = require('apollo-server-express')

//Nodemon
const typeDefs = gql`
    scalar Date

    type Usuario{
        nombre: String
        identificacion: Int
        estado: String
        email: String
        perfil: String
    }
    type Proyecto{
        identificador: String
        objetivosGenerales: String
        presupuesto: Int
        fechaTerminacion: Date
        lider: String
        nombre:String
        avances: [String]
    }
    type Avance{
        idProyecto: String
        fechaAvance: Date
        descripcion: String
        observaciones: String
        integrantes: String
    }
    type Query{
        usuarios: [Usuario]
        usuario(identificacion: Int): Usuario
        proyectos:[Proyecto]
        getProject(nombre:String):Proyecto
        getAdvance(idProyecto: String): [Avance]
    }
    input UserInput{
        nombre: String
        identificacion:Int
        clave: String
        perfil: String
    }
    input ProjectInput{
        objetivosGenerales: String
        presupuesto: Int
        fechaTerminacion: Date
        lider: String
        nombre:String
    }
    input AdvanceInput{
        idProyecto: String
        fechaAvance: Date
        descripcion: String
        observaciones: String
        integrantes: String
    }
    type Mutation{
        createUser(user:UserInput):String
        createProject(project:ProjectInput):String
        createAdvance(advance: AdvanceInput): String
        activeUser(identificacion:Int):String
        deleteUser(ident:Int):String
        deleteProject(nombreProyecto:String):String
        insertUserToProject(identificacion:Int,nombreProyecto:String):String
        addAdvance(identificacion:Int, nombreProyecto:String, idAdvance:String): String
        updateAdvance(identificacion:Int, nombreProyecto:String, idAdvance:String, descripcion: String): String
    }
`
module.exports = typeDefs