import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import userController from "./controllers/userController.js";
import dotenv from 'dotenv';


dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Connect to the database
connectDB();

// Define routes
app.use("/users", userController); // All routes defined in userController will have /users as a base path

app.listen(port, () => console.log(`Server is running on port: ${port}`));
