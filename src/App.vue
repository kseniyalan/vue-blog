<template>
  <v-app :class="{ isHomePage: isHomePage }">
    <v-app-bar
      app
      color="white"
      elevate-on-scroll
    >
      <v-app-bar-title class="d-none d-sm-flex">
        <h3 class="text-h4 amber--text text--darken-3">Just Food</h3>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/posts">Blog</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({}),
  computed: {
    isHomePage() {
      if (this.$route.path === '/') return true;
      return false;
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.isHomePage{
  //background: url('./assets/images/oranges.jpg') center center no-repeat !important;
  //background-size: contain;
}

#nav {
  padding: 10px;
  a {
    font-weight: 400;
    color: #2c3e50;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.3s;

    &:hover{
      color: #FFA000;
    }

    &.router-link-exact-active {
      color: #FF8F00;
    }
  }

  a + a{
    margin-left: 30px;
  }
}
</style>
