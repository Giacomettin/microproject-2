import User from '../models/user.js';

export const createUser = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const newUser = await User.create({ name, email, age });
        res.status(201).json({ success: true, data: newUser });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
