import express from 'express';
import {
    createLbproduct,
    deleteLbproduct,
    getLbproduct,
    getLbproducts,
    updateLbproduct,
} from '../controllers/lbproduct.controller.js';
import { verifyToken } from '../middleware/jwt.js';
const router = express.Router();

//create product route
router.post('/',verifyToken, createLbproduct);

//delete product route
router.delete('/:id',verifyToken,deleteLbproduct);

//retrive product route
router.get('/single/:id',getLbproduct);

//retrive all products
router.get('/',getLbproducts);

//update product route
router.put('/:id', verifyToken, updateLbproduct);

export default router;