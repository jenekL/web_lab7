import api from './../services/api'

export default {
  async getArticles () {
    const response = await api().get('/article/getAll');

    return response.data;
  },
  async addArticle (name, author, text) {
    const response = await api().post(`/article/add?name=${name}&author=${author}&text=${text}&date=${new Date()}`);
    return response.data;
  },
  async addComment (postId, comment) {
    const response = await api().post(`/comments/add?postId=${postId}&text=${comment}&user=Jenya&date=${new Date()}`);
    return response.data;
  },
}
