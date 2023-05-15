import express from 'express';
import { createUse, getUserById, getUsers } from './user.controlar';
const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/create-user', createUse)

export default router;