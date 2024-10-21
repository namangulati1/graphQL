import mongoose from "mongoose";

export const connectDB = (uri: string) => {
  mongoose
    .connect(uri, { dbName: "test" })
    .then((db) => {
      console.log(`MongoDB connected: ${db.connection.name}`);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};
