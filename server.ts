import express, { Request, Response } from "express";
import { connectToMongoDb } from "./src/db/connection";
import getRepoRoute from "./src/routes/getUserDetails";

const server = async () => {
  try {
    connectToMongoDb();
    const app = express();
    app.use(express.json());
    app.get("/", (req: Request, res: Response) => {
      res.status(200).send("api working");
    });

    app.use("/users", getRepoRoute);
    app.listen(3000, () => {
      console.log("Listening at port 3000");
    });
  } catch (error) {
    console.log(error);
  }
};

server();
