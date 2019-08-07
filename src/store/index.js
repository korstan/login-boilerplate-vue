import Vuex from 'vuex';
import Vue from 'vue';
import Auth from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Auth,
  },
});
