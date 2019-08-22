import Vue from 'vue'
import Vuex from 'vuex'

import global from './modules/global'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    strict: debug,
    modules: {
        global
    }
    // state: {
    //     settings: {
    //         title: `Week planner`,
    //         locale: 'en',
    //         showWeekend: true,
    //         dow: 1,
    //         weekdayColors: ['#e3001b', '#ec7404', '#fed500', '#40af49', '#009de0', '#b6007b', '#5b1f7f'],
    //         ...JSON.parse(localStorage.getItem('settings'))
    //     },
    //     isLoading: false,
    //     week: []
    // },
    // mutations: {},
    // actions: {}
})
