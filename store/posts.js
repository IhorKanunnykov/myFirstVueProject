export const state = () => ({
    posts: []
})

export const getters = {
    posts(state) {
        return state.posts
    },
    postById(state) {
        return (id) => state.posts.find(p => p.id === id)
    },
    comments(state) {
        return state.posts.comments
    }
}


export const actions = {
    async loadPosts({ commit }) {//тут подгружаю сервер
        const posts = await this.$axios.$get('/posts', {
            params: {
                _embed: 'comments',
                _expand: 'user'
            }
        })
        commit('setPosts', posts)
    },//первый аргумент коммита- название нужной мутации!
    async publishPost({ commit }, post) {
        const newpost = await this.$axios.post('/posts', post)
        commit('publishPost', newpost)
    },
    async addComment({ commit }, comment) {
        const newComment = await this.$axios.post('/comments', comment)
        commit('addComment', newComment)
    }//,
    // async loadPostById({ commit }, id) {
    //     const post = await this.$axios.$get('/posts', id, {
    //         params: {
    //             _embed: 'comments',
    //             _expand: 'user'
    //         }
    //     })
    //     commit('setPosts', post)
    // }
}
export const mutations = {
    setPosts(state, posts) {
        state.posts = posts
    },
    publishPost(state, post) {
        state.posts.push(post)
    },
    addComment(state, comment) {
        const postIndex = state.posts.findIndex(p => p.id === comment.postId)
        state.posts[postIndex].comments.push(comment)
    }
}
