import { Schema } from "mongoose";
import mongoose from "mongoose";

const URL = new Schema({
    hash: String,
    originURL: String,
    shortURL: String
},
{timestamps: true});

export default mongoose.model('URL',URL);