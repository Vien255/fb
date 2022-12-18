import { client } from "./axiosClient";

export const postComment = (slug) => {
  return client.post(`articles/${slug}/comments`);
};
