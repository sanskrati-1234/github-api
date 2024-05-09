type UserInterface = {
  login: String;
  id: Number;
  avatar_url?: String;
  name: String;
  company: String;
  location: String;
  email: String;
  bio: String;
  followers?: Number;
  following?: Number;
};

const formatUser = (obj: UserInterface): UserInterface => {
  return {
    login: obj.login,
    id: obj.id,
    avatar_url: obj.avatar_url,
    name: obj.name,
    company: obj.company,
    location: obj.location,
    email: obj.email,
    bio: obj.bio,
    followers: obj.followers,
    following: obj.following,
  };
};

export default formatUser;
