<template>
  <ValidationObserver
    v-slot="{ handleSubmit }"
    v-if="currentStep == step.stepId"
  >
    <form class="step step1 mt-5 mb-3" @submit.prevent="handleSubmit(onSubmit)">
      <Field v-for="field in step.listField" :key="field.key" :field="field" />
      <button
        v-if="currentStep > 1 && currentStep < stepLength"
        class="btn btn-primary m-2"
        @click="previousStep"
      >
        Previous
      </button>
      <button
        v-if="currentStep < stepLength"
        type="submit"
        class="btn btn-primary m-2"
      >
        Next
      </button>
      <button
        v-if="currentStep == stepLength"
        class="d-block btn btn-primary m-auto mt-2"
        @click="resetStep"
      >
        Reset
      </button>
    </form>
  </ValidationObserver>
</template>

<script>
import Field from "./Field.vue";

export default {
  name: "Step",
  components: {
    Field,
  },
  props: {
    currentStep: Number,
    step: Object,
    stepLength: Number,
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
    resetStep() {
      this.$emit("resetStepEvent");
    },
  },
};
</script>

<style></style>
