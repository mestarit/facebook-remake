<script setup lang="ts">
import Button from './Button.vue';
</script>

<template>
  <div class="login-screen">
    <form class="inputs">
      <label for="input-email" class="input-email-label">Email</label>
      <input type="text" id="input-email" name="input-email" class="input-email">
      <label for="input-password" class="input-password-label">Password</label>
      <input type="password" id="input-password" name="input-password" class="input-password">
    </form>

    <Button buttonTitle="Log in" class="login-button" />

    <a href="#" class="forgot-password">Forgot password?</a>
    <div class="remember-me">
      <input type="checkbox" id="remember-me" name="remember-me">
      <label for="remember-me">Remember me?</label>
    </div>
    
  </div>
</template>

<style scoped>
.input-email {
  margin: 0;
  position: absolute;
  top: 25%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  padding-inline: 10px;

  width: 16rem;
  height: 1.5rem;

  border-color: rgb(71, 129, 255);
  border-radius: 0.3rem;
  border-style: solid;
}

.input-email-label {
  margin: 0;
  position: absolute;
  top: 20.2%;
  left: 21.5%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.input-password {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  
  padding-inline: 10px;

  width: 16rem;
  height: 1.5rem;

  border-color: rgb(71, 129, 255);
  border-radius: 0.3rem;
  border-style: solid;
}

.input-password-label {
  margin: 0;
  position: absolute;
  top: 45.2%;
  left: 25.5%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.login-screen {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  height: 32rem;
  width: 25rem;

  box-shadow: 2px 2px 2px 1px rgba(0,0,0,0.2);
  background-color: rgb(255,255,255,1);
  border-radius: 0.5rem;
}

.login-button {
  margin: auto;
  margin: 0;
  position: absolute;
  top: 76%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  width: 18rem;
  height: 3rem;

  background-color: rgb(71, 129, 255);
  border-color: transparent;
  border-radius: 0.25rem;

  box-shadow: 2px 2px 2px 1px rgba(0,0,0,0.2);
  color: white;
  font-size: 28px;

  transition: ease-in-out .3s;
}

.login-button:hover {
  background-color: rgb(53, 115, 230);
}

.forgot-password {
  margin: auto;
  margin: 0;
  position: absolute;
  top: 68.77%;
  left: 69%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  font-size: small;
  text-decoration: none;
  color:black
}

.remember-me {
  margin: auto;
  margin: 0;
  position: absolute;
  top: 68.5%;
  left: 30%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  font-size: small;
  text-decoration: none;
  color:black
}
</style>
