<template>
  <div class="progress mb-2">
    <div
      class="progress-bar"
      role="progressbar"
      :style="{ width: currentProgressBarWidth + '%' }"
      :aria-valuenow="currentProgressBarWidth"
      :aria-valuemin="progressBarWidthAtFirstStep"
      aria-valuemax="100"
    />
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    progressBarWidthAtFirstStep: Number,
    currentStep: Number,
  },
  computed: {
    currentProgressBarWidth() {
      let a = this.progressBarWidthAtFirstStep * this.currentStep;
      return a;
    },
  },
};
</script>

<style></style>
