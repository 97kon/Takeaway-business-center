<template>
    <div>
<!--        v-if-->
<!--        <p v-if="score>=90">优秀</p>-->
<!--        <p v-else-if="score>=80">良好</p>-->
<!--        <p v-else-if="score>=60">及格</p>-->
<!--        <p v-else-if="score<60">不及格</p>-->

<!--        v-show-->
<!--        <p v-show="isShow">nmsl</p>-->
<!--        v-for-->
<!--        <p v-for="num in nums" :key="nums.id"> {{nums.num}}</p>-->
<!--        <p v-for="item in nums" :key="num.id">{{num.num}}</p>-->
        <p v-for="item in items" :key="item.id">{{item.num}}</p>
    </div>

</template>

<script>

import index from "vuex";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "test2",
    computed: {
        index() {
            return index
        }
    },

    data(){
        return{
            // score:99
            // isShow:true
            items:[
                {id:1,num:66},
                {id:2,num:33},
                {id:3,num:44}
            ],
            names:[

            ]
        }
    }
}
</script>

<style scoped>

</style>