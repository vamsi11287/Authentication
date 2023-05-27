const mongoose=require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email:
    {
        type:String,
        required:true,
        unique:true
    },
    password:
    {
        type:String,
        required:true,
    }
    
},{timestamps:true})

/////////////////////static signup function////////////////////////////////

//this want to required two things (((---email,password---)))  
userSchema.statics.signup=async(email,password)=>{
    const exists = await User.findOne({email})
    if(exists){
        throw Error('Email already exists')
    }


// bcrypt help us to secure (or) hash our password 
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)

    const user = await User.create({email,password:hash})
    return user;
}

/////////////create a staric login Function ////////////////////
userSchema.statics.login = async(email,password) =>{
    const user = await User.findOne({email})
    if(!user){
        throw Error('Incorrect Email')
    }
    const match = await bcrypt.compare(password,user.password)
    if(!match){
        throw Error('incorrect password')
    }
    return user
}

const User = mongoose.model('Authuser',userSchema)

module.exports = User;