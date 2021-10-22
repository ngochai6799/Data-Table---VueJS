<template>
  <div id="app">
    <router-link class="btn btn-primary m-2" :to="{ name: 'home' }"
      >Bài tập 1</router-link
    >
    <router-link class="btn btn-primary m-2" to="/form">Bài tập 2</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  background-color: #ddd9c2;
  height: 100%;
}
</style>
