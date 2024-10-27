// import express from "express";
// import cors from "cors";
// import { errorMiddleware } from "./middlewares/error.js";
// import morgan from "morgan";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "./graphql/schema/schema.js";
import { connectDB } from "./database/database.js";
import { getAllUsers } from "./controllers/user.controller.js";

dotenv.config({ path: "./.env" });

export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = Number(process.env.PORT) || 3000;
const mongoURI = process.env.MONGO_URI! || "";

connectDB(mongoURI);

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: {
    Query: {
      users: getAllUsers
    },
  },
});

startStandaloneServer(server, {
  listen: {
    port,
  },
})
  .then(() => {
    console.log("Server is working on Port: 4000 in DEVELOPMENT Mode.");
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors({ origin: " * ", credentials: true }));
// app.use(morgan("dev"));

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

// your routes here

// app.get("*", (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: "Page not found",
//   });
// });

// app.use(errorMiddleware);

// app.listen(port, () =>
//   console.log("Server is working on Port:" + port + " in " + envMode + " Mode.")
// );
