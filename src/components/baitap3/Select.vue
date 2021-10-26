<template>
  <div class="content">
    <div class="container">
      <h2 class="mb-5">Select Province</h2>
      <Dropdown />
      <div class="show-province">
        <ProvinceSelected
          v-for="p in provinceSavedArrayHandle"
          :key="p.code"
          :p="p"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProvinceSelected from "./ProvinceSelected.vue";
import Dropdown from "./Dropdown.vue";

export default {
  name: "Select",
  components: {
    ProvinceSelected,
    Dropdown,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      getData: "getProvinceListFromApi",
    }),
  },
  async created() {
    await this.getData();
  },
  computed: {
    ...mapGetters(["provinceSavedArray", "provinceArray"]),
    provinceSavedArrayHandle() {
      console.log(this.$store);
      return this.provinceArray.filter((province) =>
        this.provinceSavedArray.includes(province.code)
      );
    },
  },
};
</script>

<style lang="scss">
.dropdown {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 480px;
  .dropbtn {
    width: 100%;
    height: 48px;
    background: #ffffff;
    border: 1px solid #999999;
    border-radius: 4px;
    box-sizing: border-box;
    color: #999999;
    padding: 16px;
    font-size: 16px;
    cursor: pointer;
    line-height: 24px;
    font-family: Noto Sans;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .focus {
    box-shadow: 0px 0px 8px rgba(0, 123, 195, 0.32);
    border: 1px solid #007bc3;
  }
}

.dropdown-content {
  position: absolute;
  top: 100%;
  display: none;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  background: #ffffff;
  box-shadow: 0px 1px 8px rgba(102, 102, 102, 0.2);
  border-radius: 4px;
  width: 480px;
  padding: 10px 0 0 0;
  .dropdown-list {
    overflow: auto;
    height: 304px;
    width: 100%;
  }
  .dropdown-option {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  .button-group {
    position: relative;
    text-align: left;
    padding: 16px 0 16px 16px;
    button[disable="true"] {
      background-color: #dcdcdc;
    }
    .btn-yes {
      width: 104px;
      height: 32px;
      background-color: #007bc3;
      border-radius: 4px;
      border: none;
      margin-right: 10px;
      color: white;
    }
    .btn-cancel {
      background-color: transparent;
      color: #007bc3;
      border: none;
    }
  }
}

.show {
  display: block;
}

.show-province {
  margin-top: 8px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 480px;
  min-height: 48px;
  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 8px 0px;
  display: flex;
  flex-wrap: wrap;
}
</style>
