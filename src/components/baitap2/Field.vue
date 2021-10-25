<template>
  <ValidationProvider
    :name="field.key"
    :rules="field.rules"
    v-slot="{ errors }"
  >
    <div :class="field.classDiv">
      <label :class="field.classLabel">{{ field.fieldName }}</label>
      <input :type="field.type" :class="field.classInput" v-model="formData" />
      <span>{{ errors[0] }}</span>
    </div>
  </ValidationProvider>
</template>

<script>
export default {
  name: "Field",
  props: {
    field: Object,
  },
  data() {
    return {
      formData: "",
    };
  },
  
};
</script>

<style script>
.form-check {
  display: flex !important;
  flex-direction: row-reverse;
  justify-content: center;
}
.step input[type="checkbox"] {
  margin-right: 5px;
}
</style>
