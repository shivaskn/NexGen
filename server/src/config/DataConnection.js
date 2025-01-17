import mongoose from "mongoose";

const connection = () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB is connected successfully");
  } catch (error) {
    console.log("Connection error", error);
  }
};

export default connection;
