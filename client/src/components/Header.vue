<template>
  <v-toolbar>
    <v-btn 
    flat
    @click="goToPath('menu')">Меню</v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-title>
      Вас ослуживает:
    </v-toolbar-title>
    <v-toolbar-title class="mr-3">
      {{user.name}}
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn 
    flat 
    icon 
    class="mr-5 "
    @click="goToPath('basket')">
      <v-badge color="primary">
        <span slot="badge">4</span> <!--slot can be any component-->
        <v-icon large color="primary">local_grocery_store</v-icon>
      </v-badge>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  beforeCreate() {
    if( !this.$store.state.user ) {
      this.$store.dispatch('loadUser')
    }
    
  },
  methods:{
    goToPath(go) {
      this.$router.push({name: go });
    },
  },
  computed: {
    user(){      
      return this.$store.state.user ? this.$store.state.user : ''
    }
  }
}
</script>

<style>

</style>
