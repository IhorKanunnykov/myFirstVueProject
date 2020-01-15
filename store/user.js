export const state = () => ({
    users: []
})

export const getters = {
    users(state) {
        return state.users
    }
}


export const actions = {
    async loadUser({ commit }) {//тут подгружаю сервер
        const users = await this.$axios.$get('/users', {
            params: {
                _embed: 'comments'
            }
        })
        commit('setUser', users)
    }//первый аргумент- название нужной мутации!
}

export const mutations = {
    setUser(state, users) {//тут установливаю загруженные данные
        //с сервера в мой state - users строка 1  2
        //в users я передаю commit
        state.users = users
    }
}