<template>
    <v-layout row wrap justify-center>
        <div 
        v-for="(item, index) in grid" 
        :key="index"
        class="mb-2 mt-0"
        absolute>
            <v-btn 
            :color="item.kind === $route.params.dish ? inactive : active"
            @click="goToPath(`/menu/${item.kind}`)" >{{item.type}}</v-btn>
        </div>
        <v-flex xs12 md8>
            <v-card color="blue lighten-5" 
            v-for="(item, index) in listForPage" :key="index + $route.params.dish">
                <card-dish 
                v-on:show="shows($event)"
                :index="index"
                :indexOwner="owner"
                :incomming="item"></card-dish>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import GridMenu from "@/data/GridMenu";
import Menu from "@/data/Menu";
import CardDish from "@/components/CardDish.vue";
export default {
  data() {
    return {
      menu: Menu,
      grid: GridMenu,
      active: "blue lighten-5",
      inactive: "blue lighten-10",
      owner: null,
    };
  },
  components: {
    CardDish
  },
  methods: {
    goToPath(go) {
      this.$router.push({ path: go });
    },
    shows(evn) {
      this.owner = evn;
    }
  },
  computed: {
    listForPage() {
      const sotrArr = this.menu.filter(
        item => item.kind === this.$route.params.dish
      );
      let i,
        j,
        tempArr = [],
        piece = 3;
      for (i = 0, j = sotrArr.length; i < j; i += piece) {
        tempArr.push(sotrArr.slice(i, i + piece));
      }
      return tempArr;
    }
  }
};
</script>

<style>
</style>

