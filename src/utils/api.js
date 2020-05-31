import axios from 'axios';
const baseURL = 'https://super-mega-awesome-news-app.herokuapp.com/api';

export const fetchTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data: { topics } }) => {
    return topics;
  });
};

export const fetchArticles = (topic_slug, sort_by, order) => {
  return axios
    .get(`${baseURL}/articles`, {
      params: {
        topic: topic_slug,
        sort_by: sort_by,
        order: order,
      },
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const fetchArticle = (article_id) => {
  return axios
    .get(`${baseURL}/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const fetchComments = (article_id) => {
  return axios
    .get(`${baseURL}/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const postComment = (article_id, newComment) => {
  return axios
    .post(`${baseURL}/articles/${article_id}/comments`, newComment)
    .then();
};

export const deleteComment = (comment_id) => {
  return axios.delete(`${baseURL}/comments/${comment_id}`);
};

export const patchUserVotesById = (article_id, newVote) => {
  return axios.patch(`${baseURL}/articles/${article_id}`, {
    inc_votes: newVote,
  });
};
