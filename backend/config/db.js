import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://codepoorana7:poorana%4007@stud-management.neudx.mongodb.net/?retryWrites=true&w=majority&appName=stud-management");
        
        console.log("Connected To The Database");
    } catch (err) {
        console.error(`Error - ${err.message}`);
        process.exit(1);
    }
};

export default connectDB;