import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import Product from './mongodb/models/product.js';

import connectDB from './mongodb/connect.js';
import productsRoutes from "./mongodb/routes/productsRoutes.js";
import productRoutes from "./mongodb/routes/singleProductRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use('/api/products', productsRoutes);
app.use('/api/product', productRoutes);
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