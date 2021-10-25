<template>
  <div class="form">
    <div class="content">
      <div class="container">
        <h2 class="mb-5">Form Validate</h2>
        <ProgressBar
          :progress-bar-width-at-first-step="progressBarWidthAtFirstStep"
          :current-step="currentStep"
        />
        <FormLabel :current-step="currentStep" />
        <Step
          v-for="step in stepList"
          :key="step.stepId"
          :step="step"
          :step-length="stepList.length"
          :current-step="currentStep"
          @resetStepEvent="resetStep"
          @previousStepEvent="previousStep"
          @nextStepEvent="nextStep"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar.vue";
import FormLabel from "./FormLabel.vue";
import Step from "./Step.vue";

export default {
  name: "Form",
  components: {
    ProgressBar,
    FormLabel,
    Step,
  },
  data() {
    return {
      currentStep: 3,
      stepList: [
        {
          stepId: 1,
          listField: [
            {
              key: "name",
              fieldName: "Full Name",
              type: "text",
              rules: "required|alpha",
              classDiv: "form-group",
              classInput: "form-control",
            },
            {
              key: "email",
              fieldName: "Your Email",
              type: "email",
              rules: "required|email",
              classDiv: "form-group",
              classInput: "form-control",
            },
          ],
        },
        {
          stepId: 2,
          listField: [
            {
              key: "company",
              fieldName: "Your company name",
              type: "text",
              rules: "required",
              classDiv: "form-group",
              classInput: "form-control",
            },
            {
              key: "employee",
              fieldName: "Number of employees",
              type: "number",
              rules: "required|numeric",
              classDiv: "form-group",
              classInput: "form-control",
            },
          ],
        },
        {
          stepId: 3,
          listField: [
            {
              key: "information",
              fieldName: "From where did you here information about us?",
              type: "select",
              rules: "",
              optionList: [
                {
                  value: "friend",
                  htmlContent: "Friend",
                },
                {
                  value: "brochure",
                  htmlContent: "Brochure",
                },
              ],
            },
            {
              key: "term",
              fieldName: "I accept terms & conditions",
              type: "checkbox",
              rules: "required",
              classDiv: "form-check",
              classInput: "form-check-input",
              classLabel: "form-check-label",
            },
          ],
        },
      ],
    };
  },
  computed: {
    progressBarWidthAtFirstStep() {
      return 100 / this.stepList.length;
    },
  },
  created() {
    console.log(this.progressBarWidthAtFirstStep);
  },
  methods: {
    nextStep(data) {
      this.currentStep = data.currentStep + 1;
    },
    previousStep(data) {
      this.currentStep = data.currentStep - 1;
    },
    resetStep() {
      this.currentStep = 1;
    },
  },
};
</script>

<style>
.form {
  height: auto;
}
</style>
