<template>
  <div>
    <h1>Register</h1>
    <input
      type="email"
      name="email"
      id="email"
      v-model="email"
      placeholder="email"
    />
    <br />
    <input
      type="password"
      name="password"
      id="password"
      v-model="password"
      placeholder="password"
    />
    <br />
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService";

export default {
  name: "register",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async register() {
      const response = await AuthService.register({
        email: this.email,
        password: this.password
      });
      console.log(response.data);
    }
  }
};
</script>

<style></style>
