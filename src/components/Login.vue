<template>
  <form
    @submit="isExpanded ? signUp() : signIn()"
    class="login-form"
    v-bind:class="{expanded: isExpanded}"
  >
    <h1>{{ msg }}</h1>
    <label for="input-login">Login</label>
    <input
      v-model="credentials.username"
      id="input-login"
      type="text"
    />
    <label for="input-password">Password</label>
    <input
      v-model="credentials.password"
      id="input-password"
      type="password"
    />
    <transition name="fade">
      <input
        v-if="this.isExpanded"
        v-model="repeatedPassword"
        placeholder="Type password again"
        id="input-password-repeat"
        type="text"
      />
    </transition>
    <button type="submit">{{buttonText}}</button>
    <transition name="fade">
      <a
        v-if="!isExpanded"
        v-on:click="expand()"
      >Sign Up</a>
    </transition>
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
      buttonText: 'Sign In',
      credentials: {
        username: '',
        password: ''
      },
      repeatedPassword: ''
    };
  },
  methods: {
    collapse() {
      this.isExpanded = false;
      this.buttonText = 'Sign In';
    },
    expand() {
      this.isExpanded = true;
      this.buttonText = 'Sign Up';
    },
    signIn() {
      axios.post(AppConfig.signInEndpoint, this.credentials).then(body => body);
    },
    signUp() {
      if (this.repeatedPassword === this.credentials.password) {
        axios
          .post(AppConfig.signUpEndpoint, this.credentials)
          .then(() => this.collapse());
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-form {
  background-color: #42b983;
  height: 350px;
  max-width: 300px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5%;
  transition: height 0.5s;
}

.expanded.login-form {
  height: 400px;
  transition: height 0.5s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
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
