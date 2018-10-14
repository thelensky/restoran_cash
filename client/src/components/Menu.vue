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
                    <transition-group tag="div" class="custom-v-layout" name="list" appear
                    appear-class="custom-appear-class"
                    appear-active-class="animated zoomIn">
                        <v-flex xs4 v-for="i in menu" :key="i.id">
                            <div v-on:click="goToPath(`/menu/${i.kind}`)">
                                <cards 
                                :header="i.type" 
                                :imgPath="loadImg(i.src)"
                                ></cards>
                            </div>
                        </v-flex>
                    </transition-group>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import Cards from "@/components/Cards.vue";
export default {
  beforeCreate() {
    if( !this.$store.state.gridMenu ){
      this.$store.dispatch('loadGridMenu')
    }
  },
  components: {
    Cards
  },
  methods: {
    loadImg(img) {
      return require("@/assets/img/grid-menu/" + img);
    },
    goToPath(go) {
      this.$router.push({ path: go });
    }
  },
  computed:{
    menu(){
      return this.$store.state.gridMenu
    }
  }
};
</script>

<style scoped>
.custom-v-layout {
  margin: -1px;
  flex-wrap: wrap;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  min-width: 0;
  background-repeat: no-repeat;
  padding: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
