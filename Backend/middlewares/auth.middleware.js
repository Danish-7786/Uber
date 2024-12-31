const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
// const cookies = require("cookie-parser")
module.exports.auth = async(req,res,next)=> {
    console.log(req.headers.Authorization);
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    console.log(token);
    if(!token){
        return res.status(401).json({message : "Unauthorized"});
    }

const isBlacklisted = await blacklistToken.findOne({token});
  if(isBlacklisted){
    return res.status(401).json({message:"Unauthorized token"});
    }
    try{
    const user_id = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(user_id._id)
    
    req.user = user;
    return next();
    }
    catch(err){
        console.log(err);
        return res.status(401).json({message: "Unauthorized token"})
    }
    
} 