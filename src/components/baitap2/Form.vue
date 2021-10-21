<template>
  <div class="form">
    <div class="content">
      <div class="container">
        <h2 class="mb-5">Form Validate</h2>
        <div class="progress mb-2">
          <div
            class="progress-bar"
            role="progressbar"
            :style="{ width: progressBarWidth + '%' }"
            :aria-valuenow="progressBarWidth"
            aria-valuemin="33.33"
            aria-valuemax="99.99"
          />
        </div>
        <div class="form-label-group mt-3">
          <div class="form-label-item" :class="setFormLabelNumber(1)">
            <span class="step-number">1</span><span>About You</span>
          </div>
          <div class="form-label-item" :class="setFormLabelNumber(2)">
            <span class="step-number">2</span><span>About your Company</span>
          </div>
          <div class="form-label-item" :class="setFormLabelNumber(3)">
            <span class="step-number">3</span><span>Finishing up</span>
          </div>
        </div>
        <Step1 v-if="currentStep == 1" />
        <Step2 v-if="currentStep == 2" />
        <Step3 v-if="currentStep == 3" />
        <button
          v-if="currentStep < 3"
          class="btn btn-primary m-2"
          @click="previousStep()"
        >
          Previous
        </button>
        <button
          v-if="currentStep < 3"
          class="btn btn-primary m-2"
          @click="nextStep()"
        >
          Next
        </button>
        <button
          v-if="currentStep == 3"
          class="btn btn-primary m-2"
          @click="resetStep()"
        >
          Reset
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Step1 from "./Step1.vue";
import Step2 from "./Step2.vue";
import Step3 from "./Step3.vue";

export default {
  name: "Form",
  components: {
    Step1,
    Step2,
    Step3,
  },
  data() {
    return {
      currentStep: 1,
      progressBarWidth: 33.33,
    };
  },
  methods: {
    nextStep() {
      this.currentStep++;
      this.progressBarWidth = 33.33 * this.currentStep;
      return this.currentStep;
    },
    previousStep() {
      if (this.currentStep == 1) {
        return this.currentStep;
      } else {
        this.currentStep--;
        this.progressBarWidth = 33.33 * this.currentStep;
        return this.currentStep;
      }
    },
    resetStep() {
      this.currentStep = 1;
      this.progressBarWidth = 33.33;
    },
    setFormLabelNumber(number) {
      if (this.currentStep == number) {
        return 'active'
      } else if (this.currentStep < number) {
        return ''
      } else {
        return 'passed'
      }
    }
  },
};
</script>

<style>
.form {
  height: auto;
}
</style>
