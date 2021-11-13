<template>
  <v-col
    cols="12"
    sm="6"
    md="4"
    lg="4"
    xl="3"
    @click="onClickPost(postItem.id)"
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
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    postItem: {
      type: Object,
      require: true,
    },
    onClickPost: {
      type: Function,
      require: true,
    },
  },
}
</script>

<style lang="scss">
.posts-list-item{
  cursor: pointer;
}
</style>
