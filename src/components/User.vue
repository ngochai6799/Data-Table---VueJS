<template>
  <div class="user">
    <!-- <h1>User components</h1> -->
    <table>
      <thead>
      <tr scope="row" v-for="user in user" v-bind:key="user.id">
        <td>{{ user.userId }}</td>
        <td>{{ user.id }}</td>
        <td>{{ user.title }}</td>
        <td>{{ user.body }}</td>
      </tr>
    </thead>
    </table>
    
  </div>
</template>

<script>
export default {
  name: "comp-user",
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

<style></style>
