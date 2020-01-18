export const state = () => ({
    user: []
})

export const getters = {
    user(state) {
        return state.user
    }
}


export const actions = {
    async loadUser({ commit }) {//тут подгружаю сервер
        const user = await this.$axios.$get(`/users/`, {
            params: {
                _embed: 'posts',
            }
        })
        commit('setUser', user)
    }//первый аргумент- название нужной мутации!
}

export const mutations = {
    setUser(state, user) {//тут установливаю загруженные данные
        //с сервера в мой state - users строка 1  2
        //в users я передаю commit
        state.user = user
    }
}