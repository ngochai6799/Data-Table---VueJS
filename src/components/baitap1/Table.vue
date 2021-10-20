<template>
  <div class="content">
    <div class="container">
      <h2 class="mb-5">
        Data Table
      </h2>

      <div class="table-responsive">
        <table class="table custom-table">
          <Header />
          <User
            v-for="user in userArray"
            :key="user.id"
            :user="user"
          />
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import User from "./User.vue";
import Header from "./Header.vue";

export default {
  name: "CompTable",
  components: {
    User,
    Header,
  },
  props: {
    userArray: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>

.custom-table {
  min-width: 900px;
}
</style>
