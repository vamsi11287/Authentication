const User = require('../Model/UserModel')
const createToken = require('../utils/token')

// Login user
const loginUser = async(req,res)=>{
    const {_id,email,password} = req.body;
    try{
        const user = await User.login(email,password)

        //  create token
        const token = createToken(user._id)

        res.status(200).json({email,password,token})

    }
    catch(err){
        res.json({error:err.message})
    }
}

// Signup user
const signupUser = async(req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await User.signup(email,password)

        //  create token
        const token = createToken(user._id)

        res.status(200).json({email,password,token})

    }
    catch(err){
        res.json({error:err.message})
    }
}

module.exports = {
    loginUser,signupUser
}