import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        const client = new MongoClient(process.env.MONGO_URI);

        await client.connect();
        console.log("Connected To The Database");

        // Optionally, return the client for further operations
        return client;
    } catch (err) {
        console.error(`Error - ${err.message}`);
        process.exit(1);
    }
};

export default connectDB;
