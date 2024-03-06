import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username : {
            type: String,
            required: true,
            unique: true,
            lowercase: true
            
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: [true, "password is required!"],

        },
        isActive: {
            type: Boolean,
            default: false,
            require: true,
        }
    }, 
    {
        timestamps: true
    }
)

export const User = mongoose.model('User', userSchema); 
