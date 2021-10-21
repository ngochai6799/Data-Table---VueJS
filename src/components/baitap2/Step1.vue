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
    <!-- <p>{{ fields }}</p> -->
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
    <button type="submit" @click="processForm()">Button</button>
  </form>
</template>

<script>
import Vue from "vue";
import VeeValidate, { Validator, mapFields } from "vee-validate";
const dictionary = {
  en: {
    messages: {
      // alpha: () => "Your name must contain only alpabet letters!",
    },
  },
};

Validator.localize(dictionary);

const validator = new Validator({ first_name: "alpha" });

validator.localize("en");

Vue.use(VeeValidate);

export default {
  name: "Step1",
  data() {
    return {
      err: this.errors,
    };
  },
  // computed: {
  //   computed: mapFields({
  //     fullName: "name",
  //     email: "email",
  //   }),
  // },
  methods: {
    processForm() {
      //attempt validating all
      validator.validateAll().then((result) => {
        if (result) {
          //validation passed succesfully
          console.log(result);
          console.log(validator.errors.first("name"));
          alert("Form validated succesfully");
        }
      });
    },
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
