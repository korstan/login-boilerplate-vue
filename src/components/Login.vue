<template>
  <form
    @submit="signIn"
    class="login-form"
    v-bind:class="{expanded: isExpanded}"
  >
    <h1>{{ msg }}</h1>
    <label for="input-login">Login</label>
    <input
      id="input-login"
      type="text"
    />
    <label for="input-password">Password</label>
    <input
      id="input-password"
      type="text"
    />
    <input
      v-if="this.isExpanded"
      placeholder="Type password again"
      id="input-password"
      type="text"
    />
    <button type="submit">Sign In</button>
    <a v-on:click="isExpanded = !isExpanded">Sign Up</a>
  </form>
</template>

<script>
//import axios from 'axios';
import AppConfig from '../config/app-config';

export default {
  name: 'Login',
  props: {
    msg: String
  },
  data() {
    return {
      isExpanded: false
    };
  },
  methods: {
    signIn() {}
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

.login-form > input {
  margin: 10px;
}

.login-form > button {
  margin: 10px;
}
</style>
