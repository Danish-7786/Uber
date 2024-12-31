const userModel = require("../models/user.model");

const userService = require("../services/user.service");

const { validationResult } = require("express-validator");
const blacklistToken = require("../models/blacklistToken.model");
module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullname, email, password } = req.body;

  const isUserAlreadyRegistered = await userModel.findOne({ email });
  if (isUserAlreadyRegistered) {
    return res.status(400).json({ message: "User already registered" });
  }
  const hashedPassword = await userModel.hashPassword(password);
  const user = await userService.createUser({
    firstname:fullname.firstname,
    lastname:fullname.lastname,
    email,
    password: hashedPassword,
  });
  const token = user.generateAuthToken();
  res.status(201).json({token,user});
};


module.exports.loginUser = async(req,res)=> {

const errors = validationResult(req);
if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {email,password} = req.body;
  const user = await userModel.findOne({email}).select('+password');
  if(!user){
    return res.status(401).json("Invalid email or password");

  }
  const matchedPwd =await user.comparePassword(password);
  if(!matchedPwd){
    return res.status(401).json("Invalid email or password");

  }
  const token = user.generateAuthToken();
  res.cookie("token",token,{httpOnly:true});
//   await user.select("-password");
  res.status(200).json({user,token});
}

module.exports.getUserProfle = async(req,res,next)=> {
  return res.status(200).json({user:req.user});
}

module.exports.logoutUser = async(req,res,next)=> {
  res.clearCookie("token");

const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
if(!token){
  return res.status(401).json({message:"Unauthorized"});
}
await blacklistToken.create({token});
  
  return res.status(200).json({message:"Logged out successfully"});
}