const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const blacklistTokenModel = require("../models/blacklistToken.model")   
// const cookies = require("cookie-parser")
const captainModel = require("../models/captain.model")
module.exports.authUser = async(req,res,next)=> {
    console.log(req.headers.Authorization);
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    console.log(token);
    if(!token){
        return res.status(401).json({message : "Unauthorized"});
    }

const isBlacklisted = await blacklistTokenModel.findOne({token});
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

module.exports.authCaptain = async(req,res,next)=> {        
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    console.log(token);
    if(!token){
        return res.status(401).json({message : "Unauthorized"});
    }
    const isBlacklisted = await blacklistTokenModel.findOne({token});
    if(isBlacklisted){
        return res.status(401).json({message:"Unauthorized token blacklist"});
    }
    try{
        const captain_id = jwt.verify(token, process.env.JWT_SECRET);
        console.log(captain_id);
        const captain = await captainModel.findById(captain_id._id)
        req.captain = captain;
        return next();
    }
    catch(err){
        console.log(err);
        return res.status(401).json({message: "Unauthorized token"})
    }
    
}