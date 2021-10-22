<template>
  <tbody>
    <tr>
      <td>{{ user.userId }}</td>
      <td>{{ user.id }}</td>
      <td>{{ user.title }}</td>
      <td>{{ user.body }}</td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: "CompUser",
  props: {
    user: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
.custom-table tbody th,
.custom-table tbody td {
  color: #777;
  font-weight: 300;
  padding-bottom: 20px;
  padding-top: 20px;
  font-weight: 300;
  border: none;
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
</style>
