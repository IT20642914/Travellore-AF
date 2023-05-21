import express from 'express';
import {
  createEvent,
  deleteEvent,
  getEvent,
  getEvents,
  updateEvent,
} from '../controllers/event.controller.js';
import { verifyToken } from '../middleware/jwt.js';
const router = express.Router();

//create new Event route
router.post('/', verifyToken, createEvent);

//creat delete Event route
router.delete('/:id', verifyToken, deleteEvent);

//create retrive Event route
router.get('/single/:id', getEvent);

//createget all Event route
router.get('/', getEvents);

//createget all Event route
router.put('/:id',verifyToken , updateEvent);

export default router;
