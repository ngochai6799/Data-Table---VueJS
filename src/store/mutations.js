export default {
  fetchDataIntoState(state, data) {
    state.userArray = data;
  },
  fetchProvinceListIntoState(state, data) {
    state.provinceArray = data;
  },
  mutateProvinceSavedList(state, data) {
    state.provinceSavedArray = data;
  },
};
