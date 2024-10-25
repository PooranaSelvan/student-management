import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://codepoorana7:poorana%4007@stud-management.neudx.mongodb.net/?retryWrites=true&w=majority&appName=stud-management"); // URL-encoded password
        console.log("Connected To The DataBase");
    }
    catch(err) {
        console.log(`Error - ${err.message}`); // if there is any error it displays
        process.exit(1);
    }
}

export default connectDB;
