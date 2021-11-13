<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      elevation="2"
    >
      <v-app-bar-title class="d-none d-sm-flex">
        <h3 class="text-h4 amber--text text--darken-3">Just Food</h3>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/posts">Posts</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
