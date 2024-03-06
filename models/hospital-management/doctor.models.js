import mongoose, { Schema, model } from "mongoose";

const hospitalHoursSchema = mongoose.Schema({
    worksInHospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    },
    worksHours: {
        type: Number,
        required: true
    }
});
const doctorSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    salary: {
        name: {
            type: Number,
            require: true
        }
    },
    qualification: {
        type: String,
        required: true
    },
    experienceInYears: {
        type: Number,
        default: 0
    },
    worksInHospitals: {
        type: [hospitalHoursSchema] 
    }
    
}, {timestamps: true});


export const Doctor = mongoose.model("Doctor", doctorSchema);