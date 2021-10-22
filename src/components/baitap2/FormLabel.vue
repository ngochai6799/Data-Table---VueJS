/* eslint-disable vue/require-default-prop */
<template>
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
</template>

<script>
export default {
  name: "Step2",
  props: {
    currentStep: Number,
  },
  methods: {
    setFormLabelNumber(number) {
      if (this.currentStep == number) {
        return "active";
      } else if (this.currentStep < number) {
        return "";
      } else {
        return "passed";
      }
    },
  },
};
</script>

<style></style>
