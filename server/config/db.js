import mongoose from "mongoose";
import { config } from "dotenv";
config();

export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected.")
    } catch (error) {
        console.log(error);
    }
}