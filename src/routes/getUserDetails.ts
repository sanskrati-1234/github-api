import Express from "express";
import repoValidator from "../middlewares/repoValidator";
import getUserDetails from "../controller/getUserDetails";

const getRepoRoute = Express.Router();

getRepoRoute.get("/:userName", repoValidator, getUserDetails);

export default getRepoRoute;
