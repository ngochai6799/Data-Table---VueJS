<template>
  <div class="form-check">
    <input
      type="checkbox"
      class="form-check-input"
      :id="province.codename"
      v-model="checked"
      @change="handleChange()"
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
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    handleChange() {
      let data = {
        province: this.province,
        checked: this.checked,
      };
      this.$emit("checkboxChangeEvent", data);
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
  .form-check-label {
    display: block;
    width: 100%;
    text-align: left;
  }
}
.form-check:hover {
  background: #e7f1fd;
}
</style>
