 const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'please enter a valid email']
    },
    password: {
        type: String,
        required: true,
        select:false
    },
    socketId: {
        type: String,
       
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle:{
        color:{
            type: String,
            required: true,
            minlength: [3,"Color should be at least 3 characters long"]
        },
        plate:{
            type: String,
            required: true,
            unique: true
        },
        capacity:{
            type: Number,
            required: true,
            min: [1,"Capacity should be at least 1"]
        },
        vehicleType:{
            type: String,
            enum: ['car','motorcycle','auto'],
            required: true
        }

    },
    location:{
        lat:{
            type: Number,
        },
        lng: {
            type: Number
        }
    }
})


captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id},process.env.JWT_SECRET)
    return token;
}
captainSchema.methods.comparePassword = async function(password){
    const isMatch = await bcrypt.compare(password,this.password);
    return isMatch;
}
captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
}

const captainModel = mongoose.model('Captain', captainSchema);
module.exports = captainModel;