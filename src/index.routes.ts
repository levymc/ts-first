import { Request, Response } from 'express';
import Home from './controllers/home.controller';
import express from 'express'


const router = express.Router();

router.get('/', Home);


export default router;
