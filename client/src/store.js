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
    shopCart: [] // [{'JSON.stringify(obj):0'}, ...]
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
    },
    ADD_GOODS(state, payloud) {
      if( !state.shopCart.length ) {
        state.shopCart.push({ 1: payloud })
      }
      else{
        let index = state.shopCart.findIndex((obj) => {
          return JSON.stringify(Object.values(obj)[0]) === JSON.stringify(payloud)
        })

        if(index === -1){
          state.shopCart.push({ 1: payloud})
        }
        else{
          let newNumber = Number( Object.keys(state.shopCart[index])[0] ) + 1
          let newValue = { [newNumber]: payloud}
          state.shopCart.splice(index, 1, newValue)
        }
      }
    },
    REMOVE_GOODS(state, payloud) {
      let index = state.shopCart.findIndex((obj) => {
        return JSON.stringify(Object.values(obj)[0]) === JSON.stringify(payloud)
      })

      if (index !== -1){
        let newNumber = Number( Object.keys(state.shopCart[index])[0] ) - 1

        if (newNumber === 0) {
          state.shopCart.splice(index, 1)
        }
        else {
          let newValue = { [newNumber]: payloud}
          state.shopCart.splice(index, 1, newValue)
        }
      }
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
    },
    addGoods({ commit }, payloud){
      commit('ADD_GOODS', payloud)
    },
    removeGoods({ commit }, payloud) {
      commit('REMOVE_GOODS', payloud)
    }
  },
  getters: {
    sumParches(state) {
      return state.shopCart.reduce((sum, obj) => {        
        return sum += Number( Object.keys(obj)[0] )
      }, 0)
    },
    totalPrice(state) {
      return state.shopCart.reduce((sum, obj) => {        
        return sum += Number( Object.keys(obj)[0] * 
                      Number( Object.values(obj)[0].price) )
      }, 0)
    },
    itemsInCart(state) {
      return obj => {
        let index = state.shopCart.findIndex((i) =>{
          return JSON.stringify(Object.values(i)[0]) === JSON.stringify(obj)
        })        
        if(index === -1){
          return 0          
        }
        else {          
          return Object.keys(state.shopCart[index])[0]
        }
      }
    }
  }
})
