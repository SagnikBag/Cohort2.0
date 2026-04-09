import "dotenv/config";
import app from "./src/app.js";
import connectToDb from "./src/config/database.js";

const PORT = process.env.PORT || 3000;

connectToDb()
.catch((err)=>{
 console.error("MongoDb connection failed:",err);
 process.exit(1)
 
})



app.listen(PORT,()=>{
 console.log(`server is running on port ${PORT}`);
 
})