import axios from 'axios';
import AppConfig from '../../config/app-config';

const state = {
  // User login status flag
  isUserSignedIn: false,
  // User email address
  userEmail: ''
};

const getters = {
  // Returns user login status 
  isSignedIn: state => state.isUserSignedIn
};

const actions = {
  // Send sign in POST-request to server, do necessary mutations
  signIn({ commit }, credentials) {
    return axios
      .post(AppConfig.signInEndpoint, credentials)
      .then(body => body)
      .then(() => {
        commit('setUserEmail', credentials.email);
        commit('setUserSignedIn');
      });
  },
  // Sign out user, do necessary mutations
  signOut({ commit }) {
    commit('removeUserEmail');
    commit('setUserSignedOut');
  },
  // Send sign up POST-request to server, do necessary mutations
  signUp({ commit }, credentials) {
    return axios.post(AppConfig.signUpEndpoint, credentials).then(() => {
      commit('setUserEmail', credentials.email);
      commit('setUserSignedIn');
    });
  }
};

const mutations = {
  // Set user email state
  setUserEmail: (state, userEmail) => (state.userEmail = userEmail),
  // Remove user email from state
  removeUserEmail: state => (state.userEmail = ''),

  // Set user login status state to 'true'
  setUserSignedIn: state => (state.isUserSignedIn = true),
  // Set user login status state to 'false'
  setUserSignedOut: state => (state.isUserSignedIn = false)
};

export default {
  state,
  getters,
  actions,
  mutations
};
