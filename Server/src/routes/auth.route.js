import { Router } from "express";

import {handleLogin,handleRegistation} from "../controllers/auth.controller"

const router = Router();


router.post('/register', handleRegistation);
 router.post('/login', handleLogin);
// // router.post('/logout', logout);

export default router;
