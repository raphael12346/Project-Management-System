<script setup>
import { computed } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import sidebar from '@/components/SidebarComponents.vue'

const route = useRoute()
const showSidebar = computed(() => route.name !== 'login')
const mainClass = computed(() => (route.name === 'login' ? 'login-page' : 'non-login-page'))
</script>

<template>
  <div class="app">
    <sidebar v-if="showSidebar"/>
    <div :class="['router-view-container', { 'no-sidebar': !showSidebar }]">
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
  
  &.no-sidebar {
    padding-left: 0;
  }
  
  main.login-page {
    height: auto;
  }
  
  main.non-login-page {
    height: 100vh;
  }

  main.panels{
  background-color:rgba(255, 255, 255, 0.82);
  cursor: pointer;
  border-right: 10px solid #343a404a;
  padding-left: 10px;
} 
}
</style>
