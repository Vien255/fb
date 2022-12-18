import { client } from "./axiosClient";

export const register = (data) => {
  return client.post("users", {
    user: {
      username: data.username,
      email: data.email,
      password: data.password,
    },
  });
};

export const login = (data) => {
  return client.post("users/login", {
    user: {
      email: data.email,
      password: data.password,
    },
  });
};
