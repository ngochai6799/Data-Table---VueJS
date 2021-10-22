<template>
  <ValidationProvider :name="field.key" :rules="field.rules" v-slot="{ errors }">
    <div class="form-group">
      <label>{{ field.fieldName }}</label>
      <input :type="field.type" class="form-control" v-model="formData" />
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

<style></style>
