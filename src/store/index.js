import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            console.log(state);
            state.count++;
        }
    },
    actions: {
        increment(context) {
            context.commit("increment");
        }
    }
});