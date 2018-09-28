<template>
    <v-container grid-list-xs class="mb-2">
      <v-layout row wrap>
        
      
        <transition-group tag="div" class="custom-v-layout" name="list" appear
                    appear-class="custom-appear-class"
                    appear-active-class="animated zoomIn">
            <v-flex xs4 v-for="(i,index) in incomming" :key="index">
                <div @click="difineOrderShow(i)">
                    <cards 
                    :header="i.name" 
                    :imgPath="loadImg(i.src)"></cards>
                </div> 
            </v-flex>
            </transition-group> 
            <transition name="custom-classes-transition"
            enter-active-class="animated zoomIn"
            leave-active-class="animated zoomOut">
              <v-flex xs12 v-if="orderShow && isShow">
                  <div class="my-container mx-1">
                      <div class="box">
                          <h3>Описание</h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolorum deleniti voluptates? Dolorum sunt vel tempore inventore doloremque, voluptate delectus neque voluptatem atque vero. Consectetur quibusdam at magni similique itaque.</p>
                      </div>
                      <div class="box">
                          <h3>Энергетическая ценность</h3>
                          <ul>
                              <li v-for="(item, index) in orderShow.energyValue" :key="index">
                                  {{item}}
                              </li>
                          </ul>
                      </div>
                      <img :src="loadImg(orderShow.src)">
                  </div>
              </v-flex>
            </transition>
    
        </v-layout>    
    </v-container>
</template>

<script>
import Menu from "@/data/Menu";
import Cards from "@/components/Cards.vue";
export default {
  data() {
    return {
      menu: Menu,
      orderShow: null
    };
  },
  components: {
    Cards
  },
  props: ["incomming", "index", "indexOwner"],
  methods: {
    loadImg(img) {
      return require("@/assets/img/menu/" + img);
    },
    difineOrderShow(obj) {
      this.orderShow = null;
      setTimeout(() => {
        this.orderShow = obj;
        this.$emit("show", this.index);
      }, 100);
    }
  },
  computed: {
    isShow() {
      return this.index === this.indexOwner;
    }
  },
  watch: {
    $route() {
      this.$emit("show", null);
    }
  }
};
</script>

<style scoped>
.my-container {
  border: solid 8px white;
  height: 350px;
  overflow: hidden;
  position: relative;
  z-index: 1;
}
.my-container > img {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: auto;
  opacity: 0.6;
}
.box {
  box-sizing: border-box;
  z-index: 2;
  width: 50%;
  position: relative;
  float: left;
  padding: 5%;
  margin: 0;
  height: 100%;
}
.box h3 {
  text-align: center;
}
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
</style>
