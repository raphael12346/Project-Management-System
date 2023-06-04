<script setup>
import { computed } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import sidebar from '@/components/Sidebarcomponents.vue'

const route = useRoute()
const showSidebar = computed(() => route.name != 'login')
</script>

<template>
  <div class="app">
    <sidebar v-if="showSidebar"/>
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
    height: 100vh;
  }
}
</style>
