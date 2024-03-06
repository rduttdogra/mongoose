import mongoose, { Schema, model } from "mongoose";

const patientSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        diagonsedWith: {
            type: String,
            require: true
        },
        address: {
            type: String,
            require: true
        },
        age: {
            type: Number,
            require: true
        },
        bloodGroup: {
            type: String,
            require: true
            //enum
        },
        gender: {
            type: String,
            enum: ["M", "F", "O"],
            require: true
            //enum
        },
        addmittedIn: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"
        }
    
    }, {timestamps: true}
);


export const Patient = mongoose.model("Petition", patientSchema);