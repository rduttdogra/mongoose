import mongoose, { model } from "mongoose";

const categorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },

    }, {timestamps: true})

export const Category = mongoose.model("Category", categorySchema) 