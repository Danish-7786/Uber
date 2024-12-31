
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minLength: [3, "First name must be at least 3 characters"],
    },
    lastname: {
      type: String,
      minLength: [3, "Last name must be at least 3 characters"],
    },
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    select:false,
    required: true,
  },
  socketId: {
    type: String,
  },
});
userSchema.methods.generateAuthToken = function (){
    return token  = jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn: '24h'})
    
}
userSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password,this.password);
}
userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password,10);
    
}
const userModel = mongoose.model('user',userSchema);
module.exports = userModel;