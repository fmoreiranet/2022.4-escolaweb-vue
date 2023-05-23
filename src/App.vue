<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBarComponent.vue';
</script>

<template>
  <div>
    <NavBar />
    <RouterView />
  </div>
</template>

<style scoped></style>
