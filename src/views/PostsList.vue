<template>
  <v-container>
    <v-row class="list__cafes-title">
      <v-col>
        <h2 class="text-center text-h3 py-3">There will be 4 wide elements</h2>
      </v-col>
    </v-row>
    
    <v-row class="list__cafes-content">
      <v-col md="4" v-for="postItem in posts" :key="postItem.id"  @click="clickOnPost(postItem.id)">
        <v-card>
          
          <v-img
            height="250"
            :src="postItem.img"
          ></v-img>
          
          <v-card-title>
            <h3 class="text-h4">{{ postItem.title }}</h3>
          </v-card-title>
          
          <v-card-text>
            <p class="text-body-1">{{ postItem.description }}</p>
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
  data: () => ({
    posts: [
      {
        id: 0,
        title: 'Cafe 1',
        description: 'The best!',
        img: '../assets/logo.svg'
      },
      {
        id: 1,
        title: 'Cafe 2',
        description: 'Lorem ipsum',
        img: '../assets/logo.svg'
      },
      {
        id: 2,
        title: 'Cafe 3',
        description: 'Lorem ipsum',
        img: '../assets/logo.svg'
      },
      {
        id: 3,
        title: 'Cafe 4',
        description: 'Lorem ipsum',
        img: '../assets/logo.svg'
      },
      {
        id: 4,
        title: 'Cafe 5',
        description: 'Lorem ipsum',
        img: '../assets/logo.svg'
      },
    ]
  }),
  computed: {
    ...mapState({
      //loading: state => state.posts.loading,
    }),
    ...mapGetters({ 

    }),
  },
  methods: {
    clickOnPost(postId) {
      const url = `/posts/${postId}`;
      this.$router.push(url);
    },
  },
}
</script>
