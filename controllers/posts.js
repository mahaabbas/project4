const PostModel = require("../models/Post")


module.exports = {
    create
}

// async function create(req, res){
    
//         const newPost = new Post(req.body);
//         try{
//             const savedPost = await newPost.save();
//             res.status(200).json(savedPost)
        
//         }catch(err){
//             res.status(500).json(err)
    
//         }
   
// }

async function create(req, res){
    try {
       const newPost = await PostModel.create({post: req.body.post})
       const savedPost = await newPost.save();
           res.status(200).json(savedPost)
    }catch(err){
         res.status(500).json(err)
        }
}