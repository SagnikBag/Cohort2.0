import { Router } from "express";
import { register } from "../controllers/auth.controller";
import { registerValidator } from "../validators/auth.validator";

const authRouter = Router();


// Register route
// POST /api/auth/register
// Request body: { username, email, password }
// 
authRouter.post("/reister",registerValidator,register);