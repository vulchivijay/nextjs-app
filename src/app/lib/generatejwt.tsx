import jwt, { Secret } from 'jsonwebtoken';

const SECRET_KEY: Secret = process.env.JWT_SECRET || 'your_super_secret_key'; // Use environment variable for security

interface UserPayload {
  userId: string;
  name: string;
  // Add other relevant user data
}

export const generateToken = (payload: UserPayload): string => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' }); // Token expires in 1 hour
};