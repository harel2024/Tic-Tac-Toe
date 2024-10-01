import { User } from '../models/User';
import { getUsers } from '../dal/userDAL.js';
import bcrypt from 'bcrypt';


export const authenticateUser = async (username: string, password: string): Promise<User | null> => {
  const users = await getUsers();
  const user = users.find(u => u.username === username);
  if (user && await bcrypt.compare(password, user.passwordHash)) {
    return user;
  }
  return null;
};
