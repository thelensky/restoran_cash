<template>
  <div id="app">
    <v-app id="inspire">
      <header-page/>
      <v-container fluid>
          <router-view></router-view>
      </v-container>
    </v-app>
  </div>
</template>

<script>
  import HeaderPage from '@/components/Header.vue'
  import Menu from '@/components/Menu.vue'
  
  export default {
    components: {
      HeaderPage,
      Menu
    }
  }
</script>