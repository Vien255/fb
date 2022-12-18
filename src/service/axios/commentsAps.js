import { client } from "./axiosClient";

export const postComment = (slug, text) => {
  return client.post(`articles/${slug}/comments`, {
    comment: {
      body: text,
    },
  });
};

export const getComments = (slug) => {
  return client.get(`articles/${slug}/comments`);
};

export const deleteComment = (slug, id) => {
  return client.delete(`articles/${slug}/comments/${id}`);
};
