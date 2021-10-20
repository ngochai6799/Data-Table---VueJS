<template>
  <div class="app">
    <Table :user-array="userArray" />
  </div>
</template>

<script>
import Table from "./baitap1/Table.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
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
  created() {
    console.log("Life cycle created");
    this.$store.dispatch("getDataFromApi");
  },
  methods: {},
};
</script>

<style></style>
