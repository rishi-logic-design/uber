const userModel = require('../models/userModel');
const userService = require('../services/userService');
const { validationResult } = require('express-validator');

module.exports.registerUser = async (req, res,next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const {fullname,lastname,email,password} = req.body;
        const hashedPassword = await userModel.hashPassword(password);

        try{
            const user = await userService.registerUser({
                firstname: fullname.firstname,
                firstname: fullname.lastname,
                email,
                password: hashedPassword
            });

            const token = user.generateAuthToken();

            res.status(201).json({token, user});
        }
        catch(err){
            next(err);        
        }
}   