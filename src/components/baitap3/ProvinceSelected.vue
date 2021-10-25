<template>
  <div class="province-wrapper">
    <p>{{ provinceName }}</p>
    <img src="../../assets/images/close.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "province-selected",
  props: {
    p: Object,
  },
  created() {
    console.log(this.provinceName);
  },
  computed: {
    provinceName() {
      if (this.p.name.includes("Tỉnh")) {
        return this.p.name.slice("Tỉnh ".length);
      } else if (this.p.name.includes("Thành phố ")) {
        return this.p.name.slice("Thành phố ".length);
      }
      return this.p.name;
    },
  },
};
</script>

<style lang="scss">
.province-wrapper {
  display: inline-block;
  background-color: #f8f8f8;
  min-width: 134px;
  width: fit-content;
  margin: 0 13px;
  position: relative;
  flex-wrap: wrap;
  p {
    color: #333333;
    margin-bottom: 0;
    line-height: 30px;
    padding-right: 10px;
  }
  img {
    position: absolute;
    right: 10.5px;
    top: 9px;
  }
}
</style>
