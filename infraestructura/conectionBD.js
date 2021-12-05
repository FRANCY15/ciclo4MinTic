const mongoose = require('mongoose')

const urlDB ='mongodb+srv://MinTic4:Mintic2021@minticciclo4.smhfd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(urlDB);
const mongoDB = mongoose.connection;
mongoDB.on('open', _ =>{
    
    console.log("conectado a la bd")
})