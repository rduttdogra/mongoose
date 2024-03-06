import mongoose, { model } from "mongoose";

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
            lowercase: true
        },
        email: {
            type: String,
            require: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            require: true,
        }
    },
    {
        timestamps: true
    }
);

export const User = mongoose.model("User", userSchema);

