<template>
    <v-layout row wrap justify-center class="mb-5">
        <v-flex xs8 lg6>
            <table>
                <tr 
                is="TabelData"
                v-for="(item, index) in cart"
                :key="index"
                :entity="Object.values(item)[0]"
                :value="Object.keys(item)[0]"></tr>
                <tr>
                    <td colspan="2"> Итого к оплате: </td>
                    <td  class="total">{{totalPrice}} р.</td>
                </tr>
            </table>
        </v-flex>
    </v-layout>
</template>

<script>
import TabelData from "@/components/TabelData.vue";

export default {
    computed: {
        totalPrice(){
            return this.$store.getters.totalPrice
        },
        cart() {
            return this.$store.state.shopCart
        }
    },
    components: {
        TabelData
    }
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
