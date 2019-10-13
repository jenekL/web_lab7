import api from './../services/api'

export default {
  async getArticles () {
    const response = await api().get('/article/getAll');

    return response.data;
  },
}
