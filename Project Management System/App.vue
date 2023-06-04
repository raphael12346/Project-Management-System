<script setup>
import { RouterLink, RouterView } from 'vue-router'
import sidebar from '@/views/Login.vue'
</script>

<template>
  <div class="app">
    <router-view />
    <sidebar/>
  </div>
</template>

<style lang="scss" scoped>
  .app
  {
    display: flex;
    main{
      background-color: black;
    }
  }

</style>
