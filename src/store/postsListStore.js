import {
  getPostsList,
} from "../request";

export default {
  namespaced: true,
  state: {
    ready: false,
    loading: false,
    posts: [],
  },
  mutations: {
    POSTS_LIST_LOAD_START(state) {
      state.ready = false; 
      state.loading = true;
      state.posts = [];
    },
    POSTS_LIST_LOAD_ERROR(state) {
      state.ready = false;
      state.loading = false;
    },
    POSTS_LIST_LOAD_SUCCESS(state, payload) {
      state.loading = false;
      state.posts = payload.posts;
      state.ready = true;
    }
  },
  actions: {
    async getPostsListAction({ commit }, payload) { 
      commit("POSTS_LIST_LOAD_START");
      let posts;
      try {
        const accessToken = localStorage.getItem("accessToken");
        posts = await getPostsList(accessToken, payload);
        return commit("POSTS_LIST_LOAD_SUCCESS", posts);
      } catch (err) {
        return commit("POSTS_LIST_LOAD_ERROR");
      }
    }
  },
  getters: {
    getPosts: state => {
      return state.posts;
    },
  }
};