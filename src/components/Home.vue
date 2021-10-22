<template>
  <div class="home">
    <Table :user-array="userArray" />
  </div>
</template>

<script>
import Table from "./baitap1/Table.vue";
import { mapGetters, mapActions } from "vuex";

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
    this.getData();
  },
  methods: {
    ...mapActions({
      getData: "getDataFromApi",
    }),
  },
};
</script>

<style></style>
