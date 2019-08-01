<template>
  <div class="login-form">
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
    <button type="submit">Sign In</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-form {
  max-width: 300px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 10px solid #42b983;
  border-radius: 5%;
}
  .login-form > input {
    margin: 10px;
  }
</style>
