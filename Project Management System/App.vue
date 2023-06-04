<script setup>
import { RouterLink, RouterView } from 'vue-router'
import sidebar from '@/components/Sidebarcomponents.vue'
</script>

<template>
  <div class="app">
    <sidebar/>
    <div class="router-view-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped> 

.app {
	display: flex;
  
}
.router-view-container {
  flex: 1;
  padding-left: 260px; /* Adjust this value to match the width of your sidebar */
  
  main{
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }
}
</style>
