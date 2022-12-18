import { client } from "./axiosClient";

export const postActicle = (post) => {
  return client.post("articles", {
    article: {
      title: post.title,
      description: post.description,
      body: post.body,
    },
  });
};

export const getActicles = () => {
  return client.get("articles?limit=10&offset=0");
};

export const getActicle = (id) => {
  return client.get(`articles/${id}`);
};

export const deleteActicle = (slug) => {
  return client.delete(`articles/${slug}`);
};

export const putActicle = (slug, data) => {
  return client.put(`articles/${slug}`, {
    article: {
      description: data,
    },
  });
};
