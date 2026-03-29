import { Router } from "express";
import { register } from "../controllers/auth.controller.js";
import { registerValidator } from "../validators/auth.validator.js";

const authRouter = Router();


// Register route
// POST /api/auth/register
// Request body: { username, email, password }
// 
authRouter.post("/register",registerValidator,register);

export default authRouter;