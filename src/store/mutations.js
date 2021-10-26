export default {
  FETCH_DATA_INTO_STATE(state, data) {
    state.userArray = data;
  },
  fetchProvinceListIntoState(state, data) {
    state.provinceArray = data;
  },
  mutateProvinceSavedList(state, data) {
    state.provinceSavedArray = data;
  },
};
