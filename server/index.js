import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import productRoutes from "./mongodb/routes/productsRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use('/api/products', productRoutes);
app.use('/images', express.static('images'));
app.use(express.json({limit:'50mb'}));

app.get("/", async(req, res) => {
    res.send("Hello");
});

const startServer = async() => {

    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => {
            console.log("Server started http://localhost:8080");
        })
    } catch (error) {
        console.log(error);
    }
};

startServer();