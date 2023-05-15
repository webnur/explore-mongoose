import express from 'express';
import { createUse, getUsers } from './user.controlar';
const router = express.Router();

router.get('/', getUsers);
router.post('/create-user', createUse)

export default router;