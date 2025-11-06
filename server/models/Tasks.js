import mongoose from "mongoose"

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            default: "",
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        status: {
            type: String,
            default: "pending",
            enum: ["pending", "done"],
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
    },
    { timestamps: true }, // createAt + updateAt
);

export const Task = mongoose.model("Task", taskSchema);