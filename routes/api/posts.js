const express = require('express');
const router = express.Router();
const Post = require('../../models/Post')
const postCtrl = require('../../controllers/posts')
//create 
router.post("/", postCtrl.create)



//update post 
router.put("/:id", async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id, {
                $set: req.body,
            },
            {new: true}
        );

        res.status(200).json(updatedPost);

    }catch(err){
        res.status(500).json(err)
    }
})




//delete post 
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        await post.delete()
        res.status(200).json("post has been deleted");

    } catch(err){
        res.status(500).json(err)

    }
})


//get post 
router.get("/:id", async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch(err){
        res.status(500).json(err);
    }
})

router.get("/", async (req, res) => {
    try{
        const post = await Post.findById(req.params.body);
        res.status(200).json(post)
    } catch(err){
        res.status(500).json(err)
    }
})


//categories 

router.get("/", async (req, res) => {
    const categoryName = req.query.category
    try{
        const post = await Post.find({categories:{
            $in:[categoryName]
        }});

        res.status(200),json(post)

    } catch(err){
        res.status(500).json(err)
    }
})
module.exports = router;