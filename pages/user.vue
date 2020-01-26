<template>
  <div class="container">
    <div class="row user-info">
      <div class="col-lg-9">
        <div class="user-data">
          <h3>{{ user.name }}</h3>
          <p><strong>Age:</strong> {{ user.age }}</p>
          <p><strong>City:</strong> {{ user.city }}</p>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="avatar">
          <img class="avatar-card" src="../assets/img/1234.jpg" alt="img" />
        </div>
      </div>
    </div>
    <!-- ___________________________________________________________________________________ -->
    <div class="col-lg-4 post-user" v-for="post of user.posts" :key="post.id">
      <div class="img-post-user">
        <img
          @click="openPost(post.id)"
          class="img-post-card-user"
          src="../assets/img/1234.jpg"
          alt="img"
        />
      </div>
      <label class="comment-post-user"
        ><i class="icon fa fa-comments " aria-hidden="true"></i>5
      </label>
      <!-- добавь фигурные скобки выше! -->
    </div>
    <!-- *************************************modal******************************************** -->
    <b-modal default id="modal-scoped" size="xl" title="View post">
      <div class="row">
        <div class="col-lg-7 modal-card">
          <img class="img-in-modal" src="../assets/img/1234.jpg" alt="" />
        </div>
        <div class="col-lg-5 ">
          <div class="modal-comments">
            тут вопросик об отрисовке комментария
            <div v-if="currentPost">
              <div
                class="user-comment"
                v-for="comment of currentPost.comments"
                :key="comment.id"
              >
                {{ comment.comment }}
              </div>
            </div>
          </div>
          <!-- __________________________________________________ -->
          <div class="form-comment">
            <b-form @submit.prevent="onPublish" class="b-form-comment">
              <b-form-textarea
                v-model="comments.comment"
                class="form-textarea"
                id="textarea-no-resize"
                placeholder="Fixed height textarea"
                rows="2"
                no-resize
              ></b-form-textarea>
              <b-button
                size="sm"
                type="submit"
                variant="outline-secondary"
                class="form-button pull-right"
              >
                Publish
              </b-button>
            </b-form>
          </div>
          <!-- _____________________________________________________ -->
        </div>
      </div>
      <template v-slot:modal-footer="{ ok, cancel, hide }">
        <b-button size="sm" variant="outline-secondary" @click="hide">
          Close
        </b-button>
      </template>
    </b-modal>
    <!-- *************************************modal******************************************** -->
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    name: 'User',
    data: () => ({
      currentPost: null,
      comments:{
        userId: 2,
        postId: 1,
        comment:''
      }
    }),
    computed:{
      ...mapGetters ({ 
      myComments:'comments/comments',
      posts:'posts/posts'
      })
    },
    async asyncData ({ $axios, params }) {
      let user = {}
      try{
        user = await $axios.$get(`/users/${params.id}`, {
          params: {
          _embed: 'posts',
          }  
        })
      } catch (e) {
        console.log(e)
      }
      return { user }
    },
    methods: {
      ...mapActions({
        addComment: 'posts/addComment',
        loadPosts: 'posts/loadPosts'
      }),
      openPost(id){
        this.currentPost = this.$store.getters['posts/postById'](id)
        this.$bvModal.show('modal-scoped')
      },
      async onPublish({$axios}){
        this.comments.postId = this.currentPost.id//для добавления коммента в конкретный пост
        await this.addComment(this.comments)
        this.comments.comment = ''
        await this.loadPosts()
        this.currentPost = this.$store.getters['posts/postById'](this.currentPost.id)
      },
      hide(){
        this.$bvModal.hide('modal-scoped')
        this.comments.comment = ''
      }
    }  
  }
</script>

<style scope lang="scss">
</style>