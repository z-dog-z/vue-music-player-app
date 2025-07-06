<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/pages/componets/Header.vue'
import Player from '@/pages/componets/Player.vue'
</script>

<template>
  <!-- 使用组件 -->
   <Header></Header>
  <!-- 路由器出口 -->
 <RouterView />
 <!-- 占位div -->
  <div style="height: 50px;"></div>
 <Player/>
</template>

<style scoped>

</style>
