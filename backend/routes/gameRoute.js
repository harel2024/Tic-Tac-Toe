import express from 'express';
import { getAllGames, startGame, move } from '../controllers/gamesController.js';
const router = express.Router();
router.get(getAllGames);
router.post(startGame);
router.post(move);
export default router;
