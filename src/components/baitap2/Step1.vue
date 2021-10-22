<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form class="step step1 mt-5 mb-3" @submit.prevent="handleSubmit(onSubmit)">
      <ValidationProvider
        name="Name"
        rules="required|alpha"
        v-slot="{ errors }"
      >
        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-control" v-model="formData.name" />
          <span>{{ errors[0] }}</span>
        </div>
      </ValidationProvider>

      <ValidationProvider
        name="E-Mail"
        rules="required|email"
        v-slot="{ errors }"
      >
        <div class="form-group">
          <label>Email</label>
          <input type="email" class="form-control" v-model="formData.email" />
          <span>{{ errors[0] }}</span>
        </div>
      </ValidationProvider>
      <button type="submit" class="btn btn-primary m-2">Next</button>
    </form>
  </ValidationObserver>
</template>

<script>
export default {
  name: "Step1",
  props: {
    currentStep: Number,
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
      },
    };
  },
  methods: {
    onSubmit() {
      let data = {
        currentStep: this.currentStep,
      };
      this.$emit("nextStepEvent", data);
    },
  },
};
</script>

<style scoped></style>
