import axios from 'axios';
import AppConfig from '../../config/app-config';

const state = {
  isUserSignedIn: false,
  userEmail: ''
};

const getters = {
  isSignedIn: state => state.isUserSignedIn
};

const actions = {
  signIn({ commit }, credentials) {
    return axios
      .post(AppConfig.signInEndpoint, credentials)
      .then(body => body)
      .then(() => {
        commit('setUserEmail', credentials.email);
        commit('setUserSignedIn');
      });
  },
  signOut({ commit }) {
    commit('removeUserEmail');
    commit('setUserSignedOut');
  },
  signUp({ commit }, credentials) {
    return axios.post(AppConfig.signUpEndpoint, credentials).then(() => {
      commit('setUserEmail', credentials.email);
      commit('setUserSignedIn');
    });
  }
};

const mutations = {
  setUserEmail: (state, userEmail) => (state.userEmail = userEmail),
  removeUserEmail: state => (state.userEmail = ''),

  setUserSignedIn: state => (state.isUserSignedIn = true),
  setUserSignedOut: state => (state.isUserSignedIn = false)
};

export default {
  state,
  getters,
  actions,
  mutations
};
