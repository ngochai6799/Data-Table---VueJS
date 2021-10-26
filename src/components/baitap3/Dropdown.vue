<template>
  <div class="dropdown">
    <div class="dropbtn" @click.stop="toggleOptionList">
      <span>Chọn tỉnh thành</span>
      <img src="../../assets/images/arrow.svg" />
    </div>
    <div id="myDropdown" class="dropdown-content">
      <div class="dropdown-list">
        <Option
          v-for="province in provinceArrayClone"
          :key="province.code"
          :province="province"
          @checkboxChange="handleCheckboxChange"
        />
      </div>
      <div class="button-group">
        <button
          class="btn-yes"
          :disable="isButtonDisable"
          @click="handleBtnYesClick"
        >
          Đồng Ý
        </button>
        <button class="btn-cancel" @click="handleBtnCancelClick">Hủy</button>
      </div>
    </div>
  </div>
</template>

<script>
import Option from "./Option.vue";
import { mapActions, mapGetters } from "vuex";

window.onclick = function (event) {
  if (
    !event.target.matches(".form-check-label") &&
    !event.target.matches(".form-check-input") &&
    !event.target.matches(".form-check")
  ) {
    let dropdownContent =
      document.getElementsByClassName("dropdown-content")[0];
    if (dropdownContent.classList.contains("show")) {
      dropdownContent.classList.remove("show");
    }
    let focusedElement = document.getElementsByClassName("dropbtn")[0];
    if (focusedElement.classList.contains("focus")) {
      focusedElement.classList.remove("focus");
    }
  }
};

export default {
  name: "Dropdown",
  components: {
    Option,
  },
  data() {
    return {
      isButtonDisable: true,
      provinceCheckedArray: [],
    };
  },
  created() {
    this.getData();
  },
  computed: {
    ...mapGetters({
      provinceArray: "provinceList",
      provinceSavedArray: "provinceSavedArray",
    }),
    provinceArrayClone() {
      let arr = this.provinceArray.map((a) =>
        Object.assign({ checked: false }, a)
      );
      arr.filter((item) => item.checked);
      return arr;
    },
  },
  watch: {
    provinceCheckedArray: function () {
      if (this.provinceCheckedArray.length > 0) {
        this.isButtonDisable = false;
      } else this.isButtonDisable = true;
    },
  },
  methods: {
    ...mapActions({
      getData: "getProvinceListFromApi",
    }),
    toggleOptionList() {
      document.getElementById("myDropdown").classList.toggle("show");
      document.getElementsByClassName("dropbtn")[0].classList.toggle("focus");
    },
    handleCheckboxChange(data) {
      if (data.checked == true) {
        this.provinceCheckedArray.push(data);
      } else {
        let index = this.provinceCheckedArray.indexOf(data);
        this.provinceCheckedArray.splice(index, 1);
      }
    },
    handleBtnYesClick() {
      const arr = this.provinceCheckedArray.map((b) => Object.assign({}, b));
      this.$store.dispatch("saveProvinceAction", arr);
    },
    handleBtnCancelClick() {
      console.log("cancel");
      const arr = this.provinceSavedArray.map((a) =>
        Object.assign({ checked: false }, a)
      );

      this.provinceCheckedArray = arr;
      console.log(arr);
      // this.$store.dispatch("cancel", obj2);
    },
  },
};
</script>

<style></style>
