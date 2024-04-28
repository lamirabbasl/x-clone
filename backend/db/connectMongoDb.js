import mongoose from "mongoose";

const connectMongoDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to Mongo : ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error connecting to Mongo : ${error.message}`);
    process.exit(1);
  }
};

export default connectMongoDb;
