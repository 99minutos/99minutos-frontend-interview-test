import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        launches: [],
        launchSelectId: 0,
        launchSelect: {},
        listLoading: false,
        detailsLoading: false,
        mobileAct: false,
    },
    mutations: {
        setLaunches: (state, payload) => state.launches = payload,

        setLaunchSelectId: (state, payload) => state.launchSelectId = payload,
        
        setLaunchSelect: (state, payload) => state.launchSelect = payload,
        
        setListLoading: (state, payload) => state.listLoading = payload,
        
        setDetailsLoading: (state, payload) => state.detailsLoading = payload,

        setMobileAct: (state, payload) => state.mobileAct = payload,
    },
    actions: {
        selectItem: ({commit}, payload) => {
            commit('setMobileAct', true)
            commit('setDetailsLoading', true)
            commit('setLaunchSelectId', payload.id)
        }
    }
});

export { store };