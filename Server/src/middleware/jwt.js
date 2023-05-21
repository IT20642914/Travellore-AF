import jwt from 'jsonwebtoken';
import createError from '../utils/createError.js';

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next(createError(401, 'You are not authenticated!'));
  }

  const token = authHeader.split(' ')[1];
  console.log(token);
  jwt.verify(token, process.env.JWT_TOKEN_PRIVATE_KEY, async (err, payload) => {
    if (err) {
      return next(createError(403, 'Token is not valid!'));
    }
    console.log(payload)
    req.userId = payload.userId;
    req.isAdmin = payload.isAdmin;
    next();
  });
};
