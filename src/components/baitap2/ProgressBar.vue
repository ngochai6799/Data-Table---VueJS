<template>
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
</template>

<script>
export default {
  name: "Step2",
  props: {
    progressBarWidth: Number,
  },
};
</script>

<style></style>
