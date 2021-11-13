<template>
  <div>
    <!-- Top posts block -->
    <div class="d-none d-md-flex top-block">
      <v-row v-if="loading" class="d-flex justify-center mb-6">
        <v-col md="4">
          <v-progress-circular
            indeterminate
            color="amber darken-3"
          />
        </v-col>
      </v-row>
      <v-row v-if="ready" class="d-flex mb-16 mt-6">
        <div
          class="top-item"
          v-for="postItem in topPosts"
          :key="postItem.id"
          @click="clickOnPost(postItem.id)"
        > 
          <v-img
            height="564"
            :src="postItem.img"
            class="mb-6"
          >
            <div class="item-content fluid fill-height">
              <div class="text-caption text-uppercase white--text text-center">{{ postItem.typeText }}</div>
              <v-card-title class="d-flex justify-center mb-16">
                <h4 class="text-h5 text-md-h4 white--text text-capitalize">{{ postItem.title }}</h4>
              </v-card-title>

              <!-- Button -->
              <v-btn
                tile
                outlined
                color="white"
                class="more-btn"
              >
                Read more
              </v-btn>
            </div>
          </v-img>
        </div>
      </v-row>
    </div>

    <!-- Posts list -->
    <v-container>
      <v-row v-if="ready" class="posts-list">
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="4"
          xl="3"
          v-for="postItem in posts"
          :key="postItem.id"
          @click="clickOnPost(postItem.id)"
        >
          <v-card class="posts-list-item">
            <v-img
              height="250"
              :src="postItem.img"
              class="mb-6"
            ></v-img>
            <div class="text-caption text-uppercase">{{ postItem.typeText }}</div>
            <v-card-title class="d-flex justify-center">
              <h4 class="text-h5 text-md-h4 text-capitalize">{{ postItem.title }}</h4>
            </v-card-title>

            <v-row class="d-flex justify-center">
              <v-col cols="12" sm="4" md="4" lg="4" xl="4">
                <v-divider />
              </v-col>
            </v-row>
            
            <v-card-text class="text-body-2 text-xl-body-1">
              <p class="mb-3">{{ postItem.description_short }}</p>
              <p class="font-weight-bold">Read more</p>
            </v-card-text>
          
          </v-card>
        </v-col>
      </v-row>
    
    </v-container>
  </div>
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
.top-block{
  .top-item{
    position: relative;
    width: calc((100% - 30px)/4);
    max-width: 25%;
    height: 564px;
    cursor: pointer;

    .img-wrapper{
      opacity: 0.7;
    }

    .item-content{
      position: relative;
      width: 100%;
      height: 100%;
      padding: 320px 55px 55px 55px;

      .more-btn{
        position: absolute;
        left: calc(50% - 60px);
        bottom: 55px;
        width: 120px;
      }
    }
  }

  .top-item + .top-item{
    margin-left: 10px;
  }

}

.posts-list{
  .posts-list-item{
    cursor: pointer;
  }
}
</style>
