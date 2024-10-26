// controllers/userController.js
import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import User from "../model/userSchema.js";

const router = express.Router();

// Register a new user
router.post("/register", asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    const newUser = await User.create({ name, email, password });
    res.status(201).json(newUser);
}));

// Other routes (e.g., GET /users)
router.get("/", asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users);
}));

export default router;
