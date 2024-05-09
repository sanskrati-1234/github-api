import { NextFunction, Request, Response } from "express";

const repoValidator = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userName } = req.params;
    console.log("userName", userName);

    if (!userName) {
      res.status(400).send("USER not found");
    }

    next();
  } catch (error) {
    console.log("error", error);
  }
};

export default repoValidator;
