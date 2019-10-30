<template>
<div>
    <button @click="sub">-</button>
    <span>{{num}}</span>
    <button @click="add">+</button>
</div>
</template>
<script>
   export default{
   computed:{
       num(){
           //获取store.js里面的数据
           return this.$store.state.num;
       }
   },
   methods:{
       add(){this.$store.commit("add",2)},
       sub(){this.$store.commit("sub",2)},
   }
   }
</script>