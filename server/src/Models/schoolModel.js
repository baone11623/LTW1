const mongoose = require("mongoose")

const schoolSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    address: {
        type: String
    },
    schoolSupplies: [
        {
            type: String
        }  
    ],
    image: {
        type: String
    }
})

const School = mongoose.model("school", schoolSchema)

module.exports = School