import { Router} from 'express';
const router = Router();
import userRoutes from './userRoutes.js';
import thoughtRoutes from './thoughtsRoutes.js';


router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

export default router;