<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form class="step step2 mt-5 mb-3" @submit.prevent="handleSubmit(onSubmit)">
      <ValidationProvider
        name="Company name"
        rules="required"
        v-slot="{ errors }"
      >
        <div class="form-group">
          <label>Your company name</label>
          <input type="text" class="form-control" v-model="formData.company" />
          <span>{{ errors[0] }}</span>
        </div>
      </ValidationProvider>
      <ValidationProvider
        name="Employee number"
        rules="required|numeric"
        v-slot="{ errors }"
      >
        <div class="form-group">
          <label>Number of employees</label>
          <input type="text" class="form-control" v-model="formData.employee" />
          <span>{{ errors[0] }}</span>
        </div>
      </ValidationProvider>
      <button class="btn btn-primary m-2" @click="previousStep">
        Previous
      </button>
      <button type="submit" class="btn btn-primary m-2">Next</button>
    </form>
  </ValidationObserver>
</template>

<script>
export default {
  name: "Step2",
  props: {
    currentStep: Number,
  },
  data() {
    return {
      formData: {
        company: "",
        employee: null,
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
    previousStep() {
      let data = {
        currentStep: this.currentStep,
      };
      this.$emit("previousStepEvent", data);
    },
  },
};
</script>

<style></style>
