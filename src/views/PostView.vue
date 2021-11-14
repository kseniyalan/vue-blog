<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card :loading="loading">
          <!-- Image -->
          <template slot="progress">
            <v-progress-linear
              color="amber darken-3"
              height="3"
              indeterminate
            />
          </template>
          <v-img
            height="350"
            :src="postItem.img"
            class="d-flex align-end"
            @click="openImageModal"
          >
          </v-img>
          <!-- Header -->
          <div class="post-type mb-8">
            <div class="type-text">{{ postItem.typeText }}</div>
          </div>
          <h2 class="text-h4 mb-2 text-left pl-12 pr-4">{{ postItem.title }}</h2>

          <!-- Content -->
          <v-card-text>
            <div class="font-weight-bold font-italic amber lighten-4 highlighted">
              {{ postItem.description_short }}
            </div>
            <div class="font-weight-light text-left mb-7" v-html="postItem.description" />
            <v-img
              height="350"
              :src="postItem.img"
              class="d-flex align-end">
            </v-img>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!--  Fullscreen Image Modal for mobiles -->
    <ModalDialog
      v-if="isMobile"
      fullscreen
      hideOverlay
      :header="postItem.title"
      :isOpen="imageModal"
      :imgSrc="postItem.img"
      :onSubmit="closeImageModal"
    />

    <!-- Image Modal -->
    <ModalDialog
      v-else
      :header="postItem.title"
      :isOpen="imageModal"
      :imgSrc="postItem.img"
      :onSubmit="closeImageModal"
    />
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import ModalDialog from "@/components/ModalDialog.vue";

export default {
  name: 'PostView',
  components: {
    ModalDialog,
  },
  data() {
    return {
      imageModal: false,
    };
  },
  computed: {
    ...mapState({
      loading: state => state.post.loading,
      ready: state => state.post.ready,
    }),
    ...mapGetters({ 
      postItem: 'post/getSinglePost',
    }),
    isMobile () {
      if (this.$vuetify.breakpoint.name === 'xs') return true;
      return false;
    },
  },
  methods: {
    openImageModal() {
      this.imageModal = true;
    },
    closeImageModal() {
      this.imageModal = false;
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
  min-height: 48px;
  border-radius: 10px 100px / 120px;
  padding: 20px 16px;
  margin-bottom: 28px;
}

.post-type{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 16px;

  .type-text{
    display: inline-block;
    text-align: right;
    text-transform: uppercase;
    padding: 5px 10px;
    border-radius: 0px 0px 10px 10px;
    background-color: #FFECB3;

  }
}

</style>