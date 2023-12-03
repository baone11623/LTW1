const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    content: {
        type: String
    }
})

const Comment = mongoose.model("comment", commentSchema)

module.exports = Comment