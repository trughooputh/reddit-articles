import api from "@/api";

export default {
  namespaced: true,
  state: {
    myData: "Hey im from the store",
    search: "FC Barcelona",
    articles: []
  },
  getters: {},
  mutations: {
    setSearch(state, payload) {
      state.search = payload;
    },
    setArticles(state, payload) {
      state.articles = payload;
    }
  },
  actions: {
    async querySearch({ state, commit }) {
      const { data } = await api.getRedditArticles(state.search);
      console.log(data);
      commit("setArticles", data);
    }
  }
};
