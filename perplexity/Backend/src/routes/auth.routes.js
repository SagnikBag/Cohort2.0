import { Router } from "express";
import { register,login,verifyEmail,getMe } from "../controllers/auth.controller.js";
import { registerValidator ,loginValidator} from "../validators/auth.validator.js";
import {authUser} from "../middleware/auth.middleware.js"

const authRouter = Router();


// Register route
// POST /api/auth/register
// Request body: { username, email, password }
// 
authRouter.post("/register",registerValidator,register);

authRouter.post("/login",loginValidator,login);

authRouter.get("/get-me",authUser,getMe)

authRouter.get('/verify-email', verifyEmail)

export default authRouter ;