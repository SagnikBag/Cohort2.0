// server ke start kora 
// database ke connect kora
require('dotenv').config()
const app = require("./src/app")
const connectToDb = require("./src/config/database")




connectToDb()
app.listen(3000,()=>{
 console.log("server running on port 3000")
 })
