<template>
  <div class="province-wrapper">
    <span>{{ provinceName }}</span>
    <img src="../../assets/images/close.svg" />
  </div>
</template>

<script>
export default {
  name: "ProvinceSelected",
  props: {
    p: Object,
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
  created() {
    console.log(this.provinceName);
  },
};
</script>

<style lang="scss">
.province-wrapper {
  display: inline-block;
  background-color: #f8f8f8;
  min-width: 134px;
  width: fit-content;
  margin: 2px 13px;
  position: relative;
  border-radius: 32px;
  span {
    color: #333333;
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
