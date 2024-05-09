import UserModel from "../Modals/UserModal";

const getUserAndRepo = async (userName: String) => {
  let userInfo = await UserModel.aggregate([
    {
      $match: {
        login: userName,
      },
    },
    {
      $lookup: {
        from: "repositories",
        localField: "login",
        foreignField: "owner.login",
        as: "Repositories",
      },
    },
    {
      $project: {
        _id: 0,
        login: 1,
        name: 1,
        bio: 1,
        Repositories: 1,
      },
    },
  ]);

  return userInfo;
};

export default getUserAndRepo;
