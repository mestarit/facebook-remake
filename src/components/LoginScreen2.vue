<script setup lang="ts">
</script>

<template>
    <div class="wrapper">
        <button variant="primary" class="login-button">Log In</button>
    </div>
</template>

<style scoped>
.wrapper {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

    width: 20rem;
    height: 19rem;

    border-radius: 0.4rem;
    background-color: white;
}

.login-button {
    position: relative;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 7rem;
    height: 1.8rem;
}

.login-button:hover {
    font-size: 22px;
    width: 7.5rem;
    height: 2.1rem;
}
</style>