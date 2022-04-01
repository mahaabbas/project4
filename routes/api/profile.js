const express = require('express');
const router = express.Router();
const postCtrl = require('../../controllers/posts')


router.get('/', postCtrl.postForUsers)
router.delete('/:id', postCtrl.deleteOne)

module.exports = router;