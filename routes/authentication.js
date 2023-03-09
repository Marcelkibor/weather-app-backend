const router = require("express").Router()
const User = require("../models/User")
const Joi = require("joi");
const {registerValidation, loginValidation} = require("../validateUser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
router.post("/register", async(req,res)=>{
//validate data
const {error} = registerValidation(req.body)
if(error)return res.status(400).send({error:error.details[0].message});
const usernameExist = await User.findOne({username:req.body.username})
if(usernameExist) return res.status(400).send({error:"Username already exists!"})
//hash password
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(req.body.password,salt)
// create user
const user = new User({
    username: req.body.username,
    password: hashedPassword,
})
try{
await user.save();
res.status(200).send({user: user.id})
}catch(err){
res.status(400).send({error:err})
console.log(err)
}
})
router.post("/login",async(req,res)=>{
const {error} = loginValidation(req.body)
if(error)return res.status(400).send({error: error.details[0].message});
//check if credentials are valid
const user = await User.findOne({username:req.body.username})
if(!user) return res.status(400).send({error:"Invalid username or password"})
const validPassword = await bcrypt.compare(req.body.password,user.password)
if(!validPassword) return res.status(400).send({error:"Invalid username or password"})
//create token
const token = jwt.sign({_id: user._id},process.env.TOKEN_SECRET)
res.header("jwt",token).send(token)
})
module.exports = router