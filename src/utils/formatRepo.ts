type RepoFormat = {
  id: Number;
  name: String;
  full_name: String;
  private: Boolean;
  owner: {
    login: String;
    id: Number;
  };
  fork?: Boolean;
  url?: String;
  created_at: Date;
  updated_at: Date;
};
const formatRepo = (rep: RepoFormat): RepoFormat => {
  return {
    id: rep.id,
    name: rep.name,
    full_name: rep.name,
    private: rep.private,
    owner: {
      login: rep.owner.login,
      id: rep.owner.id,
    },
    fork: rep.fork,
    url: rep.url,
    created_at: rep.created_at,
    updated_at: rep.updated_at,
  };
};

export default formatRepo;
