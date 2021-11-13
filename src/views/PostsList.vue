<template>
  <div>
    <!-- Top posts block -->
    <div class="d-none d-md-flex">
      <v-row v-if="loading" class="d-flex justify-center mb-6">
        <v-col md="4">
          <v-progress-circular
            indeterminate
            color="amber darken-3"
          />
        </v-col>
      </v-row>
      <v-row v-if="ready" class="d-flex mb-16 mt-6">
        <TopItem
          v-for="postItem in topPosts"
          :key="postItem.id"
          :postItem="postItem"
          :onClickPost="clickOnPost"
        />
      </v-row>
    </div>

    <!-- Posts list -->
    <v-container>
      <v-row v-if="ready" class="posts-list">
        <ListItem
          v-for="postItem in posts"
          :key="postItem.id"
          :postItem="postItem"
          :onClickPost="clickOnPost"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import TopItem from "@/components/TopItem.vue";
import ListItem from "@/components/ListItem.vue";
export default {
  name: 'PostsList',
  components: {
    TopItem,
    ListItem
  },
  data: () => ({}),
  computed: {
    ...mapState({
      loading: state => state.posts.loading,
      ready: state => state.posts.ready,
    }),
    ...mapGetters({ 
      posts: 'posts/getPosts',
    }),
    topPosts() {
      return this.posts.slice(0, 4);
    },
  },
  methods: {
    clickOnPost(postId) {
      const url = `/posts/${postId}`;
      this.$router.push(url);
    },
    getPostsList(){
      this.$store.dispatch('posts/getPostsListAction');
    },
  },
  created() {
    this.getPostsList();
  },
}
</script>

<style lang="scss">

</style>
