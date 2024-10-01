var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as userService from '../services/userService.js';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || "default_secret";
export const getAllGames = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user = yield userService.authenticateUser(username, password);
        if (user) {
            // יצירת טוקן JWT
            const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
            // כתיבת הטוקן לקוקי
            res.cookie('token', token, {
                httpOnly: true, // אבטחת הקוקי כך שיהיה נגיש רק בצד השרת
                secure: process.env.NODE_ENV === 'production', // בקשות מאובטחות בפרודקשן
                maxAge: 3600000 // 1 שעה
            });
            // החזרת תגובה עם הטוקן
            res.json({ token });
        }
        else {
            res.status(401).json({ message: 'Authentication failed' });
        }
    }
    catch (error) {
        next(error);
    }
});
export const startGame = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user = yield userService.createUser(username, password);
        res.json({ id: user.id, username: user.username });
    }
    catch (error) {
        next(error);
    }
});
export const move = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user = yield userService.createUser(username, password);
        res.json({ id: user.id, username: user.username });
    }
    catch (error) {
        next(error);
    }
});
