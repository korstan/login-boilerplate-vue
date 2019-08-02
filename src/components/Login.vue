<template>
  <form
    @submit="signIn"
    class="login-form"
    v-bind:class="{expanded: isExpanded}"
  >
    <h1>{{ msg }}</h1>
    <label for="input-login">Login</label>
    <input
      v-model="signInCredentials.username"
      id="input-login"
      type="text"
    />
    <label for="input-password">Password</label>
    <input
      v-model="signInCredentials.password"
      id="input-password"
      type="password"
    />
    <transition name="fade">
    <input
      v-if="this.isExpanded"
      placeholder="Type password again"
      id="input-password-repeat"
      type="text"
    />
    </transition>
    <button type="submit">Sign In</button>
    <a v-on:click="isExpanded = !isExpanded">Sign Up</a>
  </form>
</template>

<script>
import axios from 'axios';
import AppConfig from '../config/app-config';

export default {
  name: 'Login',
  props: {
    msg: String
  },
  data() {
    return {
      isExpanded: false,
      signInCredentials: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    signIn() {
      axios.post(AppConfig.signInEndpoint, this.signInCredentials).then((body) => body);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-form {
  height: 350px;
  max-width: 300px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 10px solid #42b983;
  border-radius: 5%;
  transition: height 0.5s;
}

.expanded.login-form {
  height: 400px;
  transition: height 0.5s;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.login-form > input {
  margin: 10px;
  text-align: center;
}

.login-form > button {
  margin: 10px;
}
</style>
