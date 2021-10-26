<template>
  <div class="form-check">
    <input
      :id="province.codename"
      @change="handleChange"
      type="checkbox"
      class="form-check-input"
      :checked="province.checked"
    />
    <label class="form-check-label" :for="province.codename">{{
      province.name
    }}</label>
  </div>
</template>

<script>
export default {
  name: "Option",
  props: {
    province: Object,
  },
  methods: {
    handleChange() {
      this.province.checked = !this.province.checked;
      this.$emit("checkboxChange", this.province);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-check {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  height: 40px;
  border-radius: 0px;
  padding-left: 20px;
  align-items: center;
  .form-check-input {
    margin: 0 5px 0 0;
    width: 16px;
    height: 16px;
  }
  input:checked {
    background-color: #45d1c9;
    border-color: #45d1c9;
  }
  .form-check-label {
    display: block;
    width: 100%;
    text-align: left;
    line-height: 40px;
  }
}
.form-check:hover {
  background: #e7f1fd;
}
</style>
