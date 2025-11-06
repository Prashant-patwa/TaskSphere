// imports
import express from "express";
import { config } from "dotenv";
import { connectDB } from "./config/db.js";
import { User } from "./models/User.js";
import { Task } from "./models/Tasks.js";

// Connections
config();
connectDB();

// variables
const app = express();
const PORT = process.env.PORT || 5000;

// Routes
app.get("/", (req, res) => {
    res.send("Hi from the server.")
});

// testing 
app.get("/test", async (req, res) => {
    try {
        const user = await User.create({
        name: "Prashant",
        email: "prashantpatwa12@gmail.com",
        password: "123!idc",
    });
    const task = await Task.create({
        title: "Eat healthy",
        description: "Because it will give you energy.",
        user: user._id,
    });
    res.json({message: "Testing successfull", user, task});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal server error: ${error.message}` });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});