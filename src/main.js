import Vue from "vue";
import app from "./components/app.vue";
import store from "./store.js"
new Vue({
    el:"#app",
    components:{
        app:app
    },
    store
})