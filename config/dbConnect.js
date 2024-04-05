const { default: mongoose } = require("mongoose");

const dbConnect = async () => {
    try {
        const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`Mongo db is connected !! this host : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(`mongo db connection failed`)
        process.exit(1)
    }
};
module.exports = dbConnect;