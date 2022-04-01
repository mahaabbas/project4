const express = require('express');
const router = express.Router();
const Post = require('../../models/post')
const postCtrl = require('../../controllers/posts')
//create 
// router.post("/", postCtrl.create)
router.post('/', postCtrl.create)
router.get('/', postCtrl.getAll)

module.exports = router;


// //update post 
// router.put("/:id", postCtrl.update )
    




// //delete post 
// router.delete("/:id", postCtrl.deletePost)
    


// //get post 
// router.get("/:id", postCtrl.GetPost)
    

// router.get("/", async (req, res) => {
//     try{
//         const post = await Post.findById(req.params.body);
//         res.status(200).json(post)
//     } catch(err){
//         res.status(500).json(err)
//     }
// })


// //categories 

// router.get("/", async (req, res) => {
//     const categoryName = req.query.category
//     try{
//         const post = await Post.find({categories:{
//             $in:[categoryName]
//         }});

//         res.status(200),json(post)

//     } catch(err){
//         res.status(500).json(err)
//     }
// })
// module.exports = router;