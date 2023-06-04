<script setup>
import { RouterLink, RouterView } from 'vue-router'
import sidebar from '@/components/Sidebarcomponents.vue'
</script>

<template>
  <div class="app">
    <sidebar/>
    <router-view />
  </div>
</template>

<style lang="scss" scoped> 

.app {
	display: flex;
  main{
    display: inline-block;
  }

}
</style>
