const mongoose = require('mongoose');

const pass = "mongodb+srv://alepazmont:tEBb7TbaDL6nPWSV@cluster0.q1nfn32.mongodb.net/rrss_jeah?retryWrites=true&w=majority&appName=Cluster0"

const connectMongo = async () => {
    try {
        const conn = await mongoose.connect(pass);
        console.log('INFO: Conexión a BD correcta:', conn.connection.name)
    } catch (error) {
        console.log('ERROR: (f connectMongo) ->', error.message);
    }
}

module.exports = { connectMongo };