const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        }
    },
     //add username once auth works 
      
)

module.exports = mongoose.model("Category", CategorySchema)