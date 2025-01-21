const captainModel = require('../models/captain.model');


module.exports.createCaptain = async ({ fullname, email, password,vehicle}) => {
    // console.log("Creating captain with data:", { fullname, email, password,vehicle });
       const {firstname,lastname} = fullname;
       const {color,plate,capacity,vehicleType} = vehicle
    if (!lastname || !firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are required')
    }
    const captain = await captainModel.create({
        fullname: {
        firstname,
            lastname
        },
        email,
        password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType
        }
    })
    return captain;
}