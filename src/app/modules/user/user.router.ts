import express from 'express';
import { createUse } from './user.controlar';
const router = express.Router();

router.get('/', createUse);

export default router;