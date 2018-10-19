<template>
    <tr>
        <td>{{entity.name}}</td>
        <td @mouseover="show = !show"
            @mouseout="show = !show">
            <v-btn icon
            class="ma-0 pa-0" 
            v-show="show"
            @click="addOne(entity)">
                <v-icon class="ma-0 pa-0">add_circle_outline</v-icon>
            </v-btn>
            <span class="mx-1">{{value}}</span>
            <v-btn icon
            class="ma-0 pa-0" 
            v-show="show"
            @click="removeOne(entity)">
                <v-icon class="ma-0 pa-0">remove_circle_outline</v-icon>
            </v-btn>
        </td>
        <td>{{value * entity.price}}</td>
    </tr>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  props: {
    entity: Object,
    value: String
  },
  methods: {
    addOne(obj) {
      this.$store.dispatch("addGoods", obj);
    },
    removeOne(obj) {
      this.$store.dispatch("removeGoods", obj);
    }
  }
};
</script>

<style>
</style>
