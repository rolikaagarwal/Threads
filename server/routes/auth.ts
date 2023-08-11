import { Router } from "express";
import { loginController, signUpController } from "../controller/auth.contoller";

const router = Router()
router
.post('/signup',signUpController)
.post('/login',loginController)
export default router
