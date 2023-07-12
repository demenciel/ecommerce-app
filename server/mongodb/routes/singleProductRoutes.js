import express from "express";
import Product from '../models/product.js';

const router = express.Router();

router.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
});

export default router;

