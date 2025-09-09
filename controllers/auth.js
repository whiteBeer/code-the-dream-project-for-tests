const User = require("../models/User")

const register = async (req, res) => {
    res.send("register user1")
}

const login = async (req, res) => {
    res.send("login user")
}

module.exports = {
    register,
    login,
}
