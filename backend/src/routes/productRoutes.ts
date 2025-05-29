import { Router } from 'express';
import { createProduct } from '../controllers/productController';

const router = Router();

router.post('/products', createProduct);

// Define other routes like PUT /products/:id, POST /purchase/:id

export default router;
