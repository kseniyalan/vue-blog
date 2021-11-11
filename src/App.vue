<template>
  <div id="app">
  <v-app>
    <v-app-bar
      app
      color="white"
      elevation="2"
    >
      <v-app-bar-title>
        <h3 class="text-h4">iFood</h3>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </v-app-bar>
    <v-main>
      <!-- Main! -->
    </v-main>
  </v-app>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  a + a{
    margin-left: 30px;
  }
}
</style>
