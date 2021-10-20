import axiosInstance from '../plugins/axios'

export default {

  async getDataFromApi( {commit } ) {
    try {
      let result = await axiosInstance.get('/')
      console.log(result);
      if (result.status == 200) {
        commit('fetchDataIntoState', result.data)
      } else {
        console.log(result.data.error);
      }
    } catch (error) {
      console.log(error);
    }
  }

};
