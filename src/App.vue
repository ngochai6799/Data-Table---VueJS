<template>
  <div id="app">
    <router-link class="btn btn-primary m-2" :to="{ name: 'home' }"
      >Bài tập 1</router-link
    >
    <router-link class="btn btn-primary m-2" to="/form">Bài tập 2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ddd9c2;
}
</style>
