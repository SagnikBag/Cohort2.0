import "dotenv/config";
import mongoose from "mongoose";

const connectToDb = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(`MongoDb connect: ${conn.connection.host}`);
};

export default connectToDb;
