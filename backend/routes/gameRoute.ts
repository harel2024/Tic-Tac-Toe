import express from 'express';
import * as userController from '../controllers/userController.js';
import {getAllGames,startGame,move}from '../controllers/gamesController.js'

const router = express.Router();

// הגדרת הנתיבים עם הפונקציות המתאימות
router.get('/games', getAllGames); // הוסף את הנתיב המתאים
router.post('/games/start', startGame); // הוסף את הנתיב המתאים
router.post('/games/move', move); // הוסף את הנתיב המתאים


export default router;