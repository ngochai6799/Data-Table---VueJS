<template>
  <div class="content">
    <div class="container">
      <h2 class="mb-5">Data Table</h2>

      <div class="table-responsive">
        <table class="table custom-table">
          <thead>
            <tr>
              <th scope="col">User ID</th>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
            </tr>
          </thead>
          <tbody>
            <tr scope="row" v-for="user in userArray" v-bind:key="user.id">
              <td>{{ user.userId }}</td>
              <td>{{ user.id }}</td>
              <td>{{ user.title }}</td>
              <td>{{ user.body }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "comp-table",
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
.custom-table thead tr,
.custom-table thead th {
  border-top: none;
  border-bottom: none !important;
}
.custom-table tbody th,
.custom-table tbody td {
  color: #777;
  font-weight: 300;
  padding-bottom: 20px;
  padding-top: 20px;
  font-weight: 300;
  border: none;
}
thead tr th {
  white-space: nowrap;
}
.custom-table tbody th small,
.custom-table tbody td small {
  color: #b3b3b3;
  font-weight: 300;
}
.custom-table tbody tr {
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
.custom-table tbody tr:hover,
.custom-table tbody tr:focus {
  background: #fff;
}
.custom-table .td-box-wrap {
  padding: 0;
}
.custom-table .box {
  background: #fff;
  border-radius: 4px;
  margin-top: 15px;
  margin-bottom: 15px;
}
.custom-table .box td,
.custom-table .box th {
  border: none !important;
}
</style>
