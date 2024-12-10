const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        
        mongoose.connect(`mongodb+srv://mohammedsafeer:safeershefi@cluster0.adase.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        .then(() => {
            console.log("DB connected successfully")
        })

    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB