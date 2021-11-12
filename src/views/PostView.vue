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
            <p class="font-weight-light">{{ postItem.description }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PostView',
  data: () => ({
    postItem: {
      id: 0,
      title: 'Cafe 1',
      description: 'The best!',
      img: '../assets/logo.svg'
    },
  })
}
</script>