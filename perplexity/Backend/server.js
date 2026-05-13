import "dotenv/config";
import app from "./src/app.js";
import connectToDb from "./src/config/database.js";
import http from "http";
import { testAi } from "./src/services/ai.service.js";
import { initSocket } from "./src/sockets/server.socket.js";
// import dns from "node:dns/promises";
// dns.setServers(["1.1.1.1"]);
const PORT = process.env.PORT || 3000;


const httpServer = http.createServer(app);

initSocket(httpServer)

connectToDb()
.catch((err)=>{
 console.error("MongoDb connection failed error:",err);
 process.exit(1)
 
})



httpServer.listen(PORT,()=>{
 console.log(`server is running on port ${PORT}`);
 
})