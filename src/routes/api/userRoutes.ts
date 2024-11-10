import {Router }   from 'express';
const router = Router();
import {getAllUsers, getSingleUser, createUser, updateUser, deleteUser, addFriend, deleteFriend} from '../../controllers/userController.js';

// /api/getAllusers
router.route('/').get(getAllUsers);

// /api/createUser
router.route('/').post(createUser);

// /api/getSingleUser
router.route('/:userId').get(getSingleUser);

// /api/updateUser
router.route('/:userId').put(updateUser);

// /api/deleteUser
router.route('/:userId').delete(deleteUser);

// /api/addFriend and /api/deleteFriend
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

// /api/deleteFriend


export default router;