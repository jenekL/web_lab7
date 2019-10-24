import api from './../services/api'

export default {
  async getArticles () {
    const response = await api().get('/article/getAll');

    return response.data;
  },
  async addArticle () {
    const response = await api().post('/article/add');
  },
  async addComment (postId) {
    const response = await api().post(`/comment/add?articleId=${postId}`);
  },
}
