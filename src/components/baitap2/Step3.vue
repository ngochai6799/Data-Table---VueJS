<template>
  <form class="step step3 mt-5 mb-3">
    <label for="information">From where did you here information about us?</label>
    <br />
    <select type="select" name="information">
      <option value="friend">Friend</option>
      <option value="brochure">Brochure</option>
    </select>
    <br />
    <input type="checkbox" name="term" />
    <label for="term">I accept terms & conditions</label>
    <button class="d-block btn btn-primary m-auto" @click="resetStep">
      Reset
    </button>
  </form>
</template>

<script>
export default {
  props: {
    currentStep: Number,
  },
  methods: {
    resetStep() {
      this.$emit("resetStepEvent");
    },
  },
};
</script>

<style>
input[type="checkbox"] {
  margin-right: 10px !important;
}
select {
  width: 256px;
  height: 30px;
}
</style>
