export const state = () => ({
    comments: []
})

export const getters = {
    comments(state) {
        return state.comments
    }
}


export const actions = {
    async loadComments({ commit }) {//тут подгружаю сервер
        const comments = await this.$axios.$get('/comments')
        commit('setComments', comments)
    },//первый аргумент- название нужной мутации!
    async addComment({ commit }, comment) {
        const newComment = await this.$axios.post('/comments', comment)
        commit('addComment', newComment)
    }
}





export const mutations = {
    setComments(state, comments) {//тут установливаю загруженные данные
        //с сервера в мой state - comments строка 1  2
        //в comments я передаю commit
        state.comments = comments
    },
    addComment(state, comment) {
        state.comments.push(comment)
    }
}
