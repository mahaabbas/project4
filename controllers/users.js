const User = require('../models/user');
const jwt = require('jsonwebtoken')

const jwtPolicy = {
    expiresIn: '24HR'
}

async function create(req, res){
    try{
        // use mongoose to create the user
        const name = req.body.name;
        const password = req.body.password;
        const email = req.body.email;
        const user = await User.create({name, password, email})
        const token = jwt.sign({ user }, process.env.JWT_SECRET, jwtPolicy)

        res.status(200).json(token)
    }catch(err){
        res.status(400).json(err)
    }
}
async function login(req, res){
    try {
        const email = req.body.email;
        const challengePassword = req.body.password;
        const user = await User.findOne({email});

        if(challengePassword !== user.password) throw new Error()

        const token = jwt.sign({ user }, process.env.JWT_SECRET, jwtPolicy)
        res.status(200).json(token);

    } catch (err) {
        // any error in the try block will come back with this message
        res.status(400).json('Bad Credentials');
    }
}


module.exports = {
    create,
    login
};
