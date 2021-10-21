<template>
  <form class="step step1 mt-5 mb-3">
    <label for="name">Full name</label>
    <input
      v-validate="'required|alpha'"
      class="d-block"
      type="text"
      name="name"
      placeholder="Type your full name"
    />
    <p>{{ errors.first("name") }}</p>
    <label for="email">Email</label>
    <input
      v-validate="'required|email'"
      class="d-block"
      type="email"
      name="email"
      placeholder="Type your email"
    />
    <p>{{ errors.first("email") }}</p>
  </form>
</template>

<script>
import Vue from "vue";
import { Validator, VeeValidate } from "vee-validate";

Vue.use(VeeValidate);

export default {
  name: "Step1",
  data() {
    return {
      err: this.errors.first("email"),
    };
  },
};
</script>

<style scoped>
.step input {
  margin-left: auto;
  margin-right: auto;
}
.step p {
  color: rgb(224, 50, 50);
}
</style>
