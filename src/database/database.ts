import mongoose from "mongoose";

export const connectDB = (uri: string) => {
  mongoose
    .connect(uri, { dbName: "sample_mflix" })
    .then((db) => {
      console.log(`MongoDB connected: ${db.connection.name}`);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};
