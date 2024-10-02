const path = require("path");
const users = require("../models/user_model");

exports.getUser = (req,res) => {
    res.sendFile(path.join(__dirname+"/../views/index.html"));
};

exports.saveUser = (req,res) => {
    const name = req.body.name;
    const age = req.body.age;
    const user = {
        name,
        age
    };
    users.push(user);
    res.status(201).json({
        success: true,
        users
    });
};