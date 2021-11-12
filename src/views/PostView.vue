<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-img
            height="350"
            :src="postItem.img"
            class="d-flex align-end"
          />
          <h2 class="text-h4 ml-4 mb-4 white--text">{{ postItem.title }}</h2>
          <v-card-text>
            <p class="font-weight-light">{{ postItem.description_short }}</p>
            <p class="font-weight-light">{{ postItem.description }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  name: 'PostView',
  props: {},
  data: () => ({}),
  computed: {
    ...mapState({
      loading: state => state.post.loading,
      ready: state => state.post.ready,
    }),
    ...mapGetters({ 
      postItem: 'post/getSinglePost',
    }),
  },
  methods: {
    clickOnImage() {

    },
    getSinglePost(){
      const postId = this.$route.params.postId;
      this.$store.dispatch('post/getSinglePostAction', postId);
    },
  },
  created() {
    //Loading posts list
    this.getSinglePost();
  },
}
</script>