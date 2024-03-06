import mongoose, { Schema, model } from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        complete: {
            type: Boolean,
            default: false,
            required: true
        },
        createdBY : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        subTodos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "SubTodo"
            }
        ] // array of subtodos
    }, 
    {
        timestamps: true
    }
)

export const Todo = mongoose.model("Todo", todoSchema)