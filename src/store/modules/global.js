const state = {
    title: `Week planner`,
    locale: 'en',
    dow: 1,
    showWeekend: true,
    isLoading: false,
    weekdayColors: ['#e3001b', '#ec7404', '#fed500', '#40af49', '#009de0', '#b6007b', '#5b1f7f'],
    ...JSON.parse(localStorage.getItem('weekplanner-global'))
}

const getters = {}

const actions = {
    changeValue(store, payload) {
        console.log(payload)
        store.commit('changeValue', payload)
        localStorage.setItem('weekplanner-global', JSON.stringify(state))
    }
}

const mutations = {
    changeValue(state, payload) {
        state[payload.key] = payload.value
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
