const mongoose = require("mongoose")

const storeSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    address: {
        type: String
    },
    phone: {
        type: String
    },
    description: {
        type: String
    },
    product: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    }]
})

const productSchema = mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    },
    image: [{
        type: String
    }],
    store: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "store"
    }
})

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

const blogSchema = mongoose.Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "school"
    },
    adProduct: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product"
        } 
    ],
    comment: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "comment"
        }
    ]
})

const commentSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    content: {
        type: String
    }
})

const userSchema = mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    address: {
        type: String
    }
})

const Store = mongoose.model("store", storeSchema)
const Product = mongoose.model("product", productSchema)
const School = mongoose.model("school", schoolSchema)
const Blog = mongoose.model("blog", blogSchema)
const Comment = mongoose.model("comment", commentSchema)
const User = mongoose.model("user", userSchema)

module.exports = {Store, Product, School, Blog, Comment, User}