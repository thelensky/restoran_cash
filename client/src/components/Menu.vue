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
                        <v-flex xs4 v-for="item in menu" :key="item.id">
                            <v-card class="pa-2 ma-1" 
                            height="250px">
                                <v-img
                                    :src="loadImg(item.src)"
                                    height="150px"
                                >                                    
                                </v-img>
                                <v-card-title primary-title>
                                    <v-spacer></v-spacer>
                                    <div>
                                        <div class="headline">{{item.type}}</div>
                                    </div>
                                    <v-spacer></v-spacer>
                                </v-card-title>
                            </v-card>
                        </v-flex>
                    </v-layout>                    
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import Menu from "@/data/GridMenu";
export default {
  data() {
    return {
      menu: Menu
    };
  },
  methods: {
    loadImg(img) {
      return require("../assets/img/grid-menu/" + img);
    }
  }
};
</script>

<style>
</style>
