import express from 'express'
import {getAllUsers} from './../controllers/users.js'

const router = express.Router()

router.get('/',getAllUsers);
//router.get('/:id',getUser);
//router.post('/add',createUser);
//router.put('/:id',updateUser);
//router.delete('/:id',deleteUSer);

export default router;