import express from 'express'
import {getAllUsers,createUser,getUser, updateUser,deleteUser} from '../controllers/user-controller.js'

const router = express.Router()

router.get('/',getAllUsers);
router.get('/:id',getUser);
router.post('/add',createUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);

export default router;