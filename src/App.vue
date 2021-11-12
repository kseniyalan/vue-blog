<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      elevation="2"
    >
      <v-app-bar-title>
        <h3 class="text-h4 teal--text text--lighten-1">Just Food</h3>
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
  background: url('./assets/images/coconuts.jpg') no-repeat center center fixed !important;
  background-size: cover;
}

#nav {
  padding: 10px;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    text-transform: uppercase;

    &.router-link-exact-active {
      color: #26A69A;
    }
  }

  a + a{
    margin-left: 30px;
  }
}
</style>
