import mongoose, { model } from "mongoose";

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },
        description: {
            type: String,
            require: true
        },
        productImage: {
            type: String,
        },
        price: {
            type: Number,
            default: 0
        },
        stock: {
            type: Number,
            default: 0
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }

    }, {timestamps: true});

export const Product = mongoose.model("Product", productSchema);