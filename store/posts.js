export const state = () => ({
    posts: []
})

export const getters = {
    posts(state) {
        return state.posts
    }
}


export const actions = {
    async loadPosts({ commit }) {//тут подгружаю сервер
        const posts = await this.$axios.$get('/posts', {
            params: {
                _embed: 'users',
                _embed: 'comments',

            }
        })
        commit('setPosts', posts)
    }//первый аргумент- название нужной мутации!
}

export const mutations = {
    setPosts(state, posts) {//тут установливаю загруженные данные
        //с сервера в мой state - users строка 1  2
        //в users я передаю commit
        state.posts = posts
    }
}
