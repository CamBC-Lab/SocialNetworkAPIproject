import { Router} from 'express';
const router = Router();
import {getAllThoughts, getSingleThought, createThought, updateThought, deleteThought, addReaction, deleteReaction} from '../../controllers/thoughtController.js';

// /api/getAllThoughts
router.route('/').get(getAllThoughts);

// /api/createThought
router.route('/').post(createThought);

// /api/getSingleThought
router.route('/:thoughtId').get(getSingleThought);

// /api/updateThought
router.route('/:thoughtId').put(updateThought);

// /api/deleteThought
router.route('/:thoughtId').delete(deleteThought);

// /api/addReaction
router.route('/:thoughtId/reactions').post(addReaction);

// /api/deleteReaction
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

export default router;