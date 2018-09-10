<template>
    <v-layout row wrap justify-center>
        <v-flex xs12 md8>
            <v-card color="blue lighten-5">
                <v-toolbar>
                    <v-spacer></v-spacer>
                    <v-toolbar-title> 
                        Меню
                    </v-toolbar-title> 
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-container grid-list-xs>
                    <v-layout row wrap>
                        <v-flex xs4 v-for="i in menu" :key="i.id">
                            <cards 
                            :item="i" 
                            :imgPath="loadImg(i.src)"></cards> 
                        </v-flex>
                    </v-layout>                    
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import Menu from "@/data/GridMenu"
import Cards from '@/components/Cards.vue'
export default {
  data() {
    return {
      menu: Menu
    }
  },
  components: {
    Cards,
  },
  methods: {
     loadImg(img) {
      return require("@/assets/img/grid-menu/" + img);
    }
  }
};
</script>

<style>
</style>
