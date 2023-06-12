import mongoose, { Schema } from "mongoose";

const visitSchema = new Schema({
    count: {
        type: Number,
        required: true, 
    }
})

export const Visit = mongoose.model("visit-count", visitSchema)