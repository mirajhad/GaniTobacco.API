import mongoose, { Schema } from "mongoose";

const rateSchema = new Schema({
    item: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price:{
        type:String,
        require:true
    }
});

export const Rate = mongoose.model("Rate", rateSchema);
