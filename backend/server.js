import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";


// Declaring Express
const app = express();

// Cors to access the api from any endpoints
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Need to set the port that api will run
const port = 5000;

// Calling The Db
connectDB();


app.listen(port , () => console.log(`Server Is Running On Port:${port}`))