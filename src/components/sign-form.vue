<template>
  <form
    @submit="isExpanded ? signUp() : signIn()"
    :class="{[$style['sign-form']]: true, [$style['expanded']]: isExpanded}"
  >
    <label>Login
      <input
        v-model="credentials.email"
        type="text"
      />
    </label>
    <label>Password
      <input
        v-model="credentials.password"
        type="password"
      />
    </label>
    <input
      v-if="isExpanded"
      v-model="repeatedPassword"
      placeholder="Type password again"
      :id="$style['input-password-repeat']"
      type="password"
    />

    <button type="submit">Submit</button>

    <a
      :id="$style['mode-switcher']"
      @click="toggleSignMode()"
    >{{ isExpanded ? 'Sign In' : 'Sign Up' }}</a>

  </form>
</template>

<script>
export default {
  name: 'SignForm',
  data() {
    return {
      isExpanded: false,
      credentials: {
        email: '',
        password: ''
      },
      repeatedPassword: ''
    };
  },
  methods: {
    // Toggling between 'sign up' mode and 'sign in' mode
    toggleSignMode() {
      this.isExpanded = !this.isExpanded;
    },
    // Dispatching sign in action from store, ((routing on home page and)) catching error
    signIn() {
      this.$store
        .dispatch('signIn', this.credentials)
        .catch(error => alert(error.message));
    },
    // Dispatching sign up action from store, ((routing on home page and)) catching error
    signUp() {
      if (this.repeatedPassword === this.credentials.password) {
        this.$store
          .dispatch('signUp', this.credentials)
          .catch(error => alert(error.message));
      } else {
        alert("Passwords doesn't match!");
      }
    }
  }
};
</script>

<style module>
.sign-form {
  background-color: #42b983;
  max-width: 250px;
  margin: 0 auto;
  padding: 25px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5%;
}

label {
  display: grid;
  text-align: center;
}

input {
  padding: 5px;
  margin: 5px;
  text-align: center;
}

.sign-form > button {
  margin: 10px;
}

#mode-switcher {
  cursor: pointer;
  text-decoration: underline;
}
</style>