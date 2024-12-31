const express = require('express');
const router = express.Router();
const {body} = require("express-validator")

const authMiddleware = require("../middlewares/auth.middleware")
const userController = require("../controllers/user.controller")
router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min:3}).withMessage('First name should be at least 3 character long'),
    body('password').isLength({min: 6}).withMessage('Password must be min 6 char long')
],
userController.registerUser)
router.post("/login",[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min: 6}).withMessage('Password must be min 6 char long')
],
userController.loginUser)


router.get("/get-user-profile",authMiddleware.auth,userController.getUserProfle)
router.get("/logout",authMiddleware.auth,userController.logoutUser)
module.exports = router;