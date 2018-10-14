import Vue from 'vue'
import Vuex from 'vuex'

//Fake Data
import Menu from "@/data/Menu";
import User from '@/data/User'
import GridMenu from "@/data/GridMenu";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null, // {name: 'Вася', role: 'waiter'}
    gridMenu: null, // [{...}, ...] in the end vertion it will be fetched from menu
    menu: null, // [{...}, ...]
    shopCart: [] // [] || [{...}, {...}]
  },
  mutations: {
    LOAD_USER(state, payloud){
      state.user = payloud
    },
    LOAD_GRID_MENU(state, payloud) {
      state.gridMenu = payloud
    },
    LOAD_MENU(state, payloud) {
      state.menu = payloud
    }
  },
  actions: {
    loadUser({ commit }){
      setTimeout(() => {
        commit('LOAD_USER', User)
      }, 700)
    },
    loadMenu({ commit }){
      setTimeout(() => {
        commit('LOAD_MENU', Menu)
      }, 1000)
    },
    loadGridMenu({ commit }) {
      setTimeout(() => {
        commit('LOAD_GRID_MENU', GridMenu)
      }, Math.floor(Math.random() * 5000))
    }
  }
})
