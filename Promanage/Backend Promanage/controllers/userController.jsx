const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const generateToken = (email) => {
    return jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    });
}

const loginUser = async (req, res) => {

    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        console.log(password);
        console.log(user.password);

        if (user && (await bcrypt.compare(password, user.password))) {
            res.json({ name: user.name, email: user.email, token: generateToken(user.email) });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: "User already exists" });

        const salt = await bcrypt.genSalt(10);
        console.log(password);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log(hashedPassword);
        const user = await User.create({ name, email, password: hashedPassword });
        console.log(hashedPassword);
        res.status(201).json({
            name: user.name, email: user.email
        })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { registerUser, loginUser }