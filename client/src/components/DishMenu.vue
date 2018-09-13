<template>
    <v-layout row wrap justify-center>
        <div 
        v-for="(item, index) in grid" 
        :key="index"
        class="mb-2 mt-0"
        absolute>
            <v-btn :color="index === 1 ? inactive : active" >{{item.type}}</v-btn>
        </div>
        <v-flex xs12 md8>
            <v-card color="blue lighten-5">    
                <v-container grid-list-xs>
                    <v-layout row wrap>
                        <v-flex xs4 v-for="i in menu" :key="i.id">
                            <cards 
                            :header="i.name" 
                            :imgPath="loadImg(i.src)"></cards> 
                        </v-flex>
                    </v-layout>                    
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import GridMenu from "@/data/GridMenu"
import Menu from "@/data/Menu"
import Cards from '@/components/Cards.vue'
export default {
  data() {
    return {
      menu: Menu,
      grid: GridMenu,
      active: 'blue lighten-5',
      inactive: 'blue lighten-10'
    }
  },
  components: {
    Cards,
  },
  methods: {
    loadImg(img) {
      return require("@/assets/img/menu/" + img);
    }
  },
  computed: {
      
  }
};
</script>

<style>
.active {
  color: red;
}
</style>
