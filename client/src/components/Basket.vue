<template>
    <v-layout row wrap justify-center class="mb-5">
        <v-flex xs8 lg6>
            <table>
                <tr v-for="(item, index) in menu" :key="index">
                    <td>{{item.name}}</td>
                    <td @mouseover="item.show = !item.show"
                        @mouseout="item.show = !item.show" :key="index">
                        <v-btn icon
                        class="ma-0 pa-0" 
                        v-show="item.show">
                            <v-icon class="ma-0 pa-0">add_circle_outline</v-icon>
                        </v-btn>
                        <span class="mx-1">1</span>
                        <v-btn icon
                        class="ma-0 pa-0" 
                        v-show="item.show">
                            <v-icon class="ma-0 pa-0">remove_circle_outline</v-icon>
                        </v-btn>
                    </td>
                    <td>{{item.price}} р.</td>
                </tr>
                <tr>
                    <td colspan="2"> Итого к оплате: </td>
                    <td  class="total">{{totalPrice}} р.</td>
                </tr>
            </table>
        </v-flex>
    </v-layout>
</template>

<script>
import Menu from "@/data/Menu";

export default {
    data(){
        return {
            // menu fill facke data. In fueteru
            menu: Menu.slice(0,4).map((i) => {
                i.show = false
                return i
            }),
        }
    },
    computed: {
        totalPrice(){
            return this.menu.reduce((total, item) => total + item.price, 0)
        },
    },
}
</script>

<style>
table {
    border-collapse: collapse;
    width: 100%;
}
td {
    border-bottom: 1px solid red;
    text-align: center
}
td:nth-child(3){
    text-align: right;
}
td:nth-child(1){
    text-align: left;
}
td:nth-child(2){
    text-align: center;
    width: 30%;
}
tr > .total{
    text-align: right;
}
td {
padding-top: 1rem;
}
</style>
