import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/userService.js';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET: string = process.env.JWT_SECRET || "default_secret";
export const getAllGames = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { username, password } = req.body;
    const user = await userService.authenticateUser(username, password);
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
    } else {
      res.status(401).json({ message: 'Authentication failed' });
    }
  } catch (error) {
    next(error);
  }
};
export const startGame = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { username, password } = req.body;
    const user: User = await userService.createUser(username, password);
    res.json({ id: user.id, username: user.username });
  } catch (error) {
    next(error);
  }
};

export const move = (req: Request, res: Response, next: NextFunction): void => {
    // תהליך המהלך דרך Socket.IO
    const { player, position } = req.body;
  
    // שלח את המהלך לכל הלקוחות המחוברים
    io.emit('makeMove', { player, position });
    
    res.status(200).json({ message: 'Move made', player, position });
  };

 