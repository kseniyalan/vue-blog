<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card :loading="loading">
          <template slot="progress">
            <v-progress-linear
              color="#42b983"
              height="3"
              indeterminate
            />
          </template>
          <v-parallax
            height="400"
            src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
            class="d-flex mb-8"
          />
          <h2 class="text-h4 mb-2">{{ postItem.title }}</h2>
          <v-card-text>
            <div class="font-weight-bold font-italic amber lighten-4 highlighted">
              {{ postItem.description_short }}
            </div>
            <div class="font-weight-light text-left mb-7" v-html="postItem.description" />
            <v-img
              height="350"
              src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
              class="d-flex align-end">
            </v-img>
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
    this.getSinglePost();
  },
}
</script>

<style lang="scss">
.highlighted{
  display: flex;
  align-items: center;
  height: 48px;
  border-radius: 4px;
  padding: 20px 16px;
  margin-bottom: 28px;
}

</style>