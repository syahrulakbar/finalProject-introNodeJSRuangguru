function mapUsers(users) {
  let obj = {};
  obj = {
    data: users,
    count: users.length,
  };
  return obj;
}

function mapArticles(articles) {
  let obj = {};
  obj = {
    data: articles,
    count: articles.length,
  };
  return obj;
}

let user1 = [
  {
    id: 1,
    username: "alvinarkansas",
    password: "PhT1Oky01",
    gender: "male",
  },
  {
    id: 2,
    username: "anisatahira",
    password: "oYt2Thj9w",
    gender: "female",
  },
];
let articles1 = [
  {
    id: 1,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 1,
  },
  {
    id: 2,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 5,
  },
  {
    id: 3,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 4,
  },
  {
    id: 4,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 6,
  },
];
export default mapUsers;
export { mapArticles };
