import mapUsers, { mapArticles } from "./getter.js";

import * as dotenv from "dotenv";
dotenv.config();
function nameProject() {
  return process.env.PROJECT_NAME;
}
function tokenProject() {
  return process.env.ACCESS_TOKEN;
}
const projectName = process.env.PROJECT_NAME;
const accessToken = process.env.ACCESS_TOKEN;
console.log(process.env.ACCESS_TOKEN);
function mergeData(usersData, articlesData) {
  let obj = {};

  let strObj = mapUsers(usersData);
  let strArticle = mapArticles(articlesData);

  obj = {
    projectName: nameProject() || "FINALPROJECT_BATCH3",
    accessToken: tokenProject() || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.jUpPwPQdui7EECeGc4-YgYW1p5e1Wl0AtiUNPkx7-DI",
    users: strObj,
    articles: strArticle,
  };

  return obj;
}

const users = [
  {
    id: 1,
    username: "isrotrip",
    password: "PhT1Oky01",
    gender: "male",
  },
  {
    id: 2,
    username: "dmtrxw",
    password: "oYt2Thj9w",
    gender: "male",
  },
  {
    id: 3,
    username: "afifahrahmak",
    password: "YhI6ErG71",
    gender: "female",
  },
  {
    id: 4,
    username: "ijtj",
    password: "cok1BgS77",
    gender: "male",
  },
  {
    id: 5,
    username: "arnoltherigan",
    password: "Ko4Rn0lD",
    gender: "male",
  },
];

const articles = [
  {
    id: 1,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 1,
  },
  {
    id: 2,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 2,
  },
  {
    id: 3,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 3,
  },
  {
    id: 4,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 4,
  },
  {
    id: 5,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 1,
  },
  {
    id: 6,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 2,
  },
  {
    id: 7,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 3,
  },
  {
    id: 8,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 5,
  },
];
console.log(mergeData(users, articles));

export default mergeData;
