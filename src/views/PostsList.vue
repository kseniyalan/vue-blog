<template>
  <v-container>
    <v-row class="list__cafes-title">
      <v-col>
        <h2 class="text-center text-h3 py-3">There will be 4 wide elements</h2>
      </v-col>
    </v-row>
    <v-row v-if="loading" class="d-flex justify-center mb-6">
      <v-col md="4">
        <v-progress-circular
          indeterminate
          color="teal lighten-1"
        />
      </v-col>
    </v-row>
    <v-row v-if="ready" class="list__cafes-content">
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="3"
        v-for="postItem in posts"
        :key="postItem.id"
        @click="clickOnPost(postItem.id)"
      >
        <v-card>
          <v-img
            height="250"
            :src="postItem.img"
          ></v-img>
          <v-card-title>
            <h3 class="text-h4">{{ postItem.title }}</h3>
          </v-card-title>
          
          <v-card-text>
            <p class="text-body-1">{{ postItem.description_short }}</p>
          </v-card-text>
        
        </v-card>
      </v-col>
    </v-row>
  
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  name: 'PostsList',
  props: {},
  data: () => ({}),
  computed: {
    ...mapState({
      loading: state => state.posts.loading,
      ready: state => state.posts.ready,
    }),
    ...mapGetters({ 
      posts: 'posts/getPosts',
    }),
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
    //Loading posts list
    this.getPostsList();
  },
}
</script>
