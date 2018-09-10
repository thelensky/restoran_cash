<template>
    <v-card class="pa-2 ma-1" 
    height="250px">
        <v-img
            :src="imgPath"
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
</template>

<script>
export default {
  props: ['item', 'imgPath']
}
</script>

<style>

</style>
