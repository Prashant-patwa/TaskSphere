// imports
import express from "express";
import { config } from "dotenv";
config();


// variables
const app = express();
const PORT = process.env.PORT || 5000;

// Routes
app.get("/", (req, res) => {
    res.send("Hi from the server.")
});


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});