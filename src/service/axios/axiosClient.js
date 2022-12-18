import axios from "axios";

const getToken = () => {
  const token = sessionStorage.getItem("JWTtoken");
  const bearer = `Bearer ${token}`;
  return bearer;
};

export const client = axios.create({
  baseURL: "https://api.realworld.io/api/",
  timeout: 10000,
  headers: {
    "X-Custom-Header": "foobar",
    Authorization: getToken(),
  },
});

client.interceptors.request.use((config) => {
  config.headers.Authorization = getToken();

  return config;
});
