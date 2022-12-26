import { client } from "./axiosClient";

export const postFavorite = (slug) => {
  return client.post(`articles/${slug}/favorite`);
};

export const deleteFavorite = (slug) => {
  return client.delete(`articles/${slug}/favorite`);
};
