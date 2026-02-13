const express = require("express")
const cookieparser = require("cookie-parser")
const authRouter = require("./route/auth.route")  
const postRouter = require("./route/post.route")

const app = express()
app.use(express.json())
app.use(cookieparser())


app.use("/api/auth",authRouter)

app.use("/api/post", postRouter);
module.exports = app