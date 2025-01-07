const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blackListTokenModel = require("../models/blackListTokenModel");
const captainModel = require("../models/captainModel");

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1]; 


    if (!token) {
        return res.status(401).json({error:"Unauthorized"});
    }

    const isBlackListed = await blackListTokenModel.findOne({token: token});

    if (isBlackListed) {
        return res.status(401).json({error:"Unauthorized"});
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await userModel.findById(decoded._id);
        if (!user) {
            return res.status(401).json({error:"Unauthorized"});
        }
        req.user = user;

        return next();
    } catch (error) {
        
    }
}

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1]; 

    console.log(token)

    if (!token) {
        return res.status(401).json({error:"Unauthorized"});
    }

    const isBlackListed = await blackListTokenModel.findOne({token: token});

    if (isBlackListed) {
        return res.status(401).json({error:"Unauthorized"});
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const captain = await captainModel.findById(decoded._id);
        if (!captain) {
            return res.status(401).json({error:"Unauthorized"});
        }
        req.captain = captain;

        return next();
    } catch (error) {
        res.status(401).json({error:"Unauthorized"});
    }
}