const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
   post:[{
        title: {
            type: String,
            required: true, 
            unique: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: false,
        },
        categories: {
            type: Array,
            required: false,
        },
        website: {
            type: String,
            required: false
        }}],
    }, //add username once auth works 
        {timestamps: true   
})

const PostModel = mongoose.model("post", PostSchema)
module.exports = PostModel;