const User = require("../models/User")
const jwt = require("jsonwebtoken")
const { UnauthenticatedError } = require("../errors")

const auth = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new UnauthenticatedError("Authentification invalid 1")
    }
    const token = authHeader.split(" ")[1]
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(payload.userId).select("-password")
        req.user = user
        next()
    } catch (err) {
        throw new UnauthenticatedError("Authentification invalid")
    }
}

module.exports = auth
