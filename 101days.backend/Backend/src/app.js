const express = require("express")
const cookieparser = require("cookie-parser")
const cors =require("cors")


const app = express()
app.use(express.json())
app.use(cookieparser())
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  }),
);


// requre routes
const authRouter = require("./route/auth.route");
const postRouter = require("./route/post.route");
const userRouter = require("./route/user.route")


// using routes
app.use("/api/auth",authRouter)
app.use("/api/post", postRouter)
app.use("/api/users",userRouter)


module.exports = app