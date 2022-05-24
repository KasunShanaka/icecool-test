import express from 'express';
import { getIceCream} from '../controllers/customers.js';

const router = express.Router();

router.get('/', getCustomers );

export default router;