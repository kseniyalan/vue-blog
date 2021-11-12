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
    POSTS_LIST_LOADING_START(state) {
      state.ready = false; 
      state.loading = true;
      state.posts = [];
    },
    POSTS_LIST_LOADING_ERROR(state) {
      state.ready = false;
      state.loading = false;
    },
    POSTS_LIST_LOADING_SUCCESS(state, payload) {
      state.loading = false;
      state.posts = payload.posts;
      state.ready = true;
    }
  },
  actions: {
    async getPostsListAction({ commit }) { 
      commit("POSTS_LIST_LOADING_START");
      let posts;
      try {
        posts = await getPostsList();
        return commit("POSTS_LIST_LOADING_SUCCESS", posts);
      } catch (err) {
        return commit("POSTS_LIST_LOADING_ERROR");
      }
    }
  },
  getters: {
    getPosts: state => {
      return state.posts;
    },
  }
};