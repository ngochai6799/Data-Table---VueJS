<template>
  <form class="step step3 mt-5 mb-3">
    <label for="where">From where did you here about us?</label>
    <br />
    <select
      type="select"
      name="where"
    >
      <option value="friend">Friend</option>
      <option value="brochure">Brochure</option>
    </select>
    <br />
    <input
      type="checkbox"
      name="term"
    />
    <label for="term">I accept terms & conditions</label>
    input
  </form>
</template>

<script>
export default {};
</script>

<style>
input[type="checkbox"] {
  margin-right: 5px;
}
select {
  width: 256px;
  height: 30px;
}
</style>
