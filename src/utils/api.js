import axios from 'axios';
const baseURL = 'https://super-mega-awesome-news-app.herokuapp.com/api';

export const fetchTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data: { topics } }) => {
    return topics;
  });
};

// export const fetchArticles = () => {
//   return axios.get(`${baseURL}/articles`).then(({ data: { articles } }) => {
//     return articles;
//   });
// };

export const fetchArticles = (topic_slug) => {
  return axios
    .get(`${baseURL}/articles`, {
      params: { topic: topic_slug },
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};
