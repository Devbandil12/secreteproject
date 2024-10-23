const jwt = require("jsonwebtoken");
const User = require("../models/user");

async function IsAuthenticated(req, res, next) {
    try {
        const cookies = req.cookies;
        const { token } = cookies;

        if (!token) {
            return res.status(401).json({ message: "Please login" });
        }

        const decoded = await jwt.verify(token, "@devbandil123");
        const { name} = decoded;
      
        
        const user = await User.findOne({name});

        if (user) {
            req.user = user;
            return next();
        } else {
            return res.status(401).json({ message: "Invalid token" });
        }
        
    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).json({ message: "Something went wrong" });
    }
}

module.exports = IsAuthenticated;
