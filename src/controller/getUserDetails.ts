import { Request, Response } from "express";
import UserModel from "../Modals/UserModal";
import axios, { AxiosResponse } from "axios";
import Repository from "../Modals/RepoModal";
import formatRepo from "../utils/formatRepo";
import formatUser from "../utils/formatUser";
import getUserAndRepo from "../queries/getUserAndRepo";

const getUserDetails = async (req: Request, res: Response) => {
  try {
    const { userName } = req.params;
    const isUser = await UserModel.find({ login: userName });
    console.log("isUser", isUser);
    if (isUser.length < 1) {
      let userData = await axios.get(
        `https://api.github.com/users/${userName}`
      );
      let repoData: AxiosResponse = await axios.get(
        `https://api.github.com/users/${userName}/repos`
      );
      const responseData: any[] = repoData.data;
      //console.log(userData);
      // @ts-ignore
      const formatUser1 = formatUser(userData.data);
      const user = new UserModel(formatUser1);
      console.log("user", user);
      await user.save();

      responseData.map(async (repp) => {
        const repo = formatRepo(repp);
        const repos = new Repository(repo);
        await repos.save();
      });
      const userDataPlusRepo = await getUserAndRepo(userName);
      console.log("userName", userName);
      res.status(200).send(userDataPlusRepo);
    } else {
      const userDataPlusRepo = await getUserAndRepo(userName);

      res.status(200).send(userDataPlusRepo);
    }
  } catch (error) {
    console.log(error);
  }
};

export default getUserDetails;
