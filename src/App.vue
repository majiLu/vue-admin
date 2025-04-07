<script setup lang="ts">
</script>

<template>
  <div class="bg-red-400 form">
    <RouterLink to="/home/index">Go to Home</RouterLink>
    <RouterLink to="/about/index">Go to About</RouterLink>
    <router-view></router-view>
  </div>
</template>

<style scoped lang="css">
.form {
  span {
    color: blue;

    h1 {
      color: yellow
    }
  }
}
</style>
