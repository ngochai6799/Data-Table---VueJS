import axiosInstance from "../plugins/axios";

export default {
  async getDataFromApi({ commit }) {
    try {
      let result = await axiosInstance.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (result.status == 200) {
        commit("fetchDataIntoState", result.data);
      } else {
        console.log(result.data.error);
      }
    } catch (error) {
      console.log(error);
    }
  },
  async getProvinceListFromApi({ commit }) {
    try {
      let result = await axiosInstance.get(
        "https://provinces.open-api.vn/api/"
      );
      if (result.status == 200) {
        commit("fetchProvinceListIntoState", result.data);
      } else {
        console.log(result.data.error);
      }
    } catch (error) {
      console.log(error);
    }
  },
};
