const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken.model');
module.exports.registerCaptain = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;
    

    try {
        const isCaptainAlreadyRegistered = await captainModel.findOne({ email });
        if (isCaptainAlreadyRegistered) {
            return res.status(400).json({ message: "Captain already registered" });
        }

        const hashedPassword = await captainModel.hashPassword(password);
        const data = {
            fullname: {
                firstname: fullname.firstname,
                lastname: fullname.lastname,
            },
            email: email,
            password: hashedPassword,
            vehicle: {
                color: vehicle.color,
                plate: vehicle.plate,
                capacity: vehicle.capacity,
                vehicleType: vehicle.vehicleType,
            },
        };


        const captain = await captainService.createCaptain(data);
        const token = captain.generateAuthToken();

        res.status(201).json({ token, captain });
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};



module.exports.loginCaptain = async(req,res)=> {    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {email,password} = req.body;
    const captain = await captainModel.findOne({email}).select('+password');
    if(!captain){
        return res.status(401).json("Invalid email or password");
    }
    const matchedPwd =await captain.comparePassword(password);
    if(!matchedPwd){
        return res.status(401).json("Invalid email or password");
    }
    const token = captain.generateAuthToken();
    res.cookie("token",token,{httpOnly:true});
    res.status(200).json({captain,token});
}
module.exports.logoutCaptain = async(req,res,next)=> {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  
    if(!token){
      return res.status(401).json({message:"Unauthorized"});
    }
    await blacklistTokenModel.create({token});
    res.clearCookie("token");
      
      return res.status(200).json({message:"Logged out successfully"});
}

module.exports.getCaptainProfile = async(req,res,next)=> {              
    return res.status(200).json({captain:req.captain});
}

