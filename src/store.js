import Vue from 'vue';
import Vuex from "vuex"

Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        num:0
    },
    mutations:{
        add(state,data){state.num+=data},
        sub(state,data){state.num-=data}
    }
})        