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
body {
  font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  background-color: #cfcece;
  font-weight: 300;
}

p {
  color: #b3b3b3;
  font-weight: 300;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

a {
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
a,
a:hover {
  text-decoration: none !important;
}

.content {
  padding: 7rem 0;
}

h2 {
  font-size: 20px;
}

.custom-table {
  min-width: 900px;
}
</style>
