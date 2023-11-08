import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const mongoDBConnect = () => {
  console.log('process.env.MONGODB_URL', process.env.MONGODB_URL);
  
  try {
    // Ensure the connection string starts with "mongodb://" or "mongodb+srv://"
    if (!process.env.MONGODB_URL.startsWith('mongodb://') && !process.env.MONGODB_URL.startsWith('mongodb+srv://')) {
      throw new Error('Invalid MongoDB connection string. It should start with "mongodb://" or "mongodb+srv://".');
    }
    
    mongoose.connect(process.env.MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    
    console.log("MongoDB - Connected");
  } catch (error) {
    console.error("Error - MongoDB Connection: " + error.message);
  }
};

export default mongoDBConnect;
