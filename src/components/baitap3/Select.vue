<template>
  <div class="content">
    <div class="container">
      <h2 class="mb-5">Select Province</h2>
      <div class="dropdown">
        <div @click.stop="toggleOptionList" class="dropbtn">
          <span>Chọn tỉnh thành</span>
          <img src="../../assets/images/arrow.svg" />
        </div>
        <div id="myDropdown" class="dropdown-content">
          <div class="dropdown-list">
            <Option
              v-for="province in provinceArray"
              :key="province.code"
              :province="province"
              @checkboxChangeEvent="handleCheckboxChange"
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
            <button class="btn-cancel">Hủy</button>
          </div>
        </div>
      </div>
      <div class="show-province">
        <ProvinceSelected
          v-for="p in provinceSelectedArray"
          :key="p.code"
          :p="p"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Option from "./Option.vue";
import ProvinceSelected from "./ProvinceSelected.vue";

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
  name: "Select",
  components: {
    Option,
    ProvinceSelected,
  },
  data() {
    return {
      provinceChosenArray: [],
      isButtonDisable: true,
      provinceSelectedArray: [],
    };
  },
  watch: {
    provinceChosenArray: function () {
      if (this.provinceChosenArray.length > 0) {
        this.isButtonDisable = false;
      } else this.isButtonDisable = true;
    },
  },
  computed: {
    ...mapGetters({
      provinceArray: "provinceList",
    }),
    // provinceSelectedArray() {
    //   let a = this.provinceArray.slice(0, 3);
    //   return a;
    // },
  },
  created() {
    this.getData();
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
        this.provinceChosenArray.push(data.province);
      } else {
        let index = this.provinceChosenArray.indexOf(data.province);
        this.provinceChosenArray.splice(index, 1);
      }
    },
    handleBtnYesClick() {
      console.log(this.provinceChosenArray);
      this.provinceSelectedArray = this.provinceChosenArray;
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
  height: 48px;
  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 8px 0px;
  display: flex;
}
</style>
