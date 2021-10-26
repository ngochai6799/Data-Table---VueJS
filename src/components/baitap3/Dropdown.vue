<template>
  <div class="dropdown">
    <div class="dropbtn" @click.stop="toggleOptionList">
      <span>Chọn tỉnh thành</span>
      <img src="../../assets/images/arrow.svg" />
    </div>
    <div id="myDropdown" class="dropdown-content">
      <div class="dropdown-list">
        <Option
          v-for="(province, index) in provinceArrayClone"
          :key="index"
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
      provinceArrayClone: [],
    };
  },
  computed: {
    ...mapGetters({
      provinceArray: "provinceArray",
      provinceSavedArray: "provinceSavedArray",
    }),
  },
  watch: {
    provinceCheckedArray: function () {
      if (this.provinceCheckedArray.length > 0) {
        this.isButtonDisable = false;
      } else this.isButtonDisable = true;
    },
    provinceArray(val) {
      let cities = JSON.parse(JSON.stringify(val));
      this.provinceArrayClone = cities.map((item) => {
        if (this.provinceSavedArray.includes(item.code)) {
          item.checked = true;
        } else {
          item.checked = false;
        }
        return item;
      });
    },
  },

  methods: {
    toggleOptionList() {
      document.getElementById("myDropdown").classList.toggle("show");
      document.getElementsByClassName("dropbtn")[0].classList.toggle("focus");
    },
    handleCheckboxChange(data) {
      if (data.checked == true) {
        this.provinceCheckedArray.push(datval);
      } else {
        let index = this.provinceCheckedArray.indexOf(data);
        this.provinceCheckedArray.splice(index, 1);
      }
    },
    handleBtnYesClick() {
      const arr = this.provinceArrayClone
        .filter((item) => item.checked)
        .map((checkedCity) => checkedCity.code);
      this.$store.dispatch("saveProvinceAction", arr);
    },
    handleBtnCancelClick() {
      let cities = JSON.parse(JSON.stringify(this.provinceArray));
      this.provinceArrayClone = cities.map((item) => {
        if (this.provinceSavedArray.includes(item.code)) {
          item.checked = true;
        } else {
          item.checked = false;
        }
        return item;
      });
    },
  },
};
</script>

<style></style>
