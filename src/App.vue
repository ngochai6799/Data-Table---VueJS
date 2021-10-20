<template>
  <div id="app">
    <Table v-bind:userArray="userArray" />
  </div>
</template>

<script>
import Table from "./components/Table.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Table,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      userArray: "userList",
    }),
  },
  methods: {},
  created() {
    console.log("Life cycle created");
    this.$store.dispatch("getDataFromApi");
  },
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
