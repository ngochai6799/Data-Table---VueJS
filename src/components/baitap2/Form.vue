<template>
  <div class="form">
    <div class="content">
      <div class="container">
        <h2 class="mb-5">Form Validate</h2>
        <ProgressBar :progress-bar-width="progressBarWidth" />
        <FormLabel :current-step="currentStep" />
        <Step1
          v-if="currentStep == 1"
          :current-step="currentStep"
          @nextStepEvent="nextStep"
        />
        <Step2
          v-if="currentStep == 2"
          :current-step="currentStep"
          @nextStepEvent="nextStep"
          @previousStepEvent="previousStep"
        />
        <Step3
          v-if="currentStep == 3"
          :current-step="currentStep"
          @resetStepEvent="resetStep"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Step1 from "./Step1.vue";
import Step2 from "./Step2.vue";
import Step3 from "./Step3.vue";
import ProgressBar from "./ProgressBar.vue";
import FormLabel from "./FormLabel.vue";

export default {
  name: "Form",
  components: {
    Step1,
    Step2,
    Step3,
    ProgressBar,
    FormLabel,
  },
  data() {
    return {
      currentStep: 3,
      progressBarWidth: 33.33,
    };
  },
  methods: {
    nextStep(data) {
      this.currentStep = data.currentStep + 1;
      this.progressBarWidth = 33.33 * this.currentStep;
      return this.currentStep;
    },
    previousStep(data) {
      this.currentStep = data.currentStep - 1;
      this.progressBarWidth = 33.33 * this.currentStep;
      return this.currentStep;
    },
    resetStep() {
      this.currentStep = 1;
      this.progressBarWidth = 33.33;
    },
  },
};
</script>

<style>
.form {
  height: auto;
}
</style>
