<template>
  <!-- </TheHeader> -->
  <div class="container">
    <!-- *********************************************post********************************************************** -->
    <div class="row" v-for="post of posts" :key="post.id">
      <div class="col-lg-9 post">
        <div class="icon">
          <i>
            <nuxt-link
              :to="{ name: 'user', params: { id: post.user.id } }"
              exact
            >
              <img src="../assets/img/user.png" />
            </nuxt-link>
          </i>
          <nuxt-link
            :to="{ name: 'user', params: { id: post.user.id } }"
            exact
            class="nuxt-link"
          >
            <strong>{{ post.user.name }}</strong>
          </nuxt-link>
        </div>
        <div class="img-post">
          <img class="post-card" src="../assets/img/login.jpg" alt="img" />
        </div>
        <div class="comment-post">
          <button class="button-post" @click.prevent="openPost(post.id)">
            Open post!
          </button>
          <span style="color:grey;">
            <i class="fa fa-comments" aria-hidden="true"></i
            >{{ post.comments.length }}</span
          >
          <!-- суда количество комментов в посте -->
        </div>
      </div>
    </div>
    <!-- *********************************************post end********************************************************** -->

    <!-- ************************************modal******************************************** -->

    <b-modal default id="modal-scoped" size="xl" title="View post">
      <div class="row row-in-modal">
        <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12 modal-card">
          <img class="img-in-modal" src="../assets/img/login.jpg" alt="" />
        </div>
        <div
          class="col-xl-5 col-lg-5 col-md-12 col-sm-12 case-for-modal-comments "
        >
          <div class="modal-comments">
            <div v-if="currentPost">
              <div
                class="user-comment"
                v-for="comment in currentPost.comments"
                :key="comment.id"
              >
                <!-- {{ comment.userId }} -->
                {{ comment.comment }}
              </div>
            </div>
          </div>
          <!-- __________________________________________________ -->
          <div class="form-comment">
            <b-form
              @submit.prevent="onPublish(currentPost.id)"
              class="b-form-comment"
            >
              <b-form-textarea
                v-model="comments.comment"
                class="form-textarea"
                id="textarea-no-resize"
                placeholder="Write your comment here!"
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
        <b-button size="sm" variant="outline-secondary" @click="hide()">
          Close
        </b-button>
      </template>
    </b-modal>
    <!-- ************************************modal end************************************************* -->
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
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
      users:'users/users',
      myComments:'posts/comments',
      posts:'posts/posts',
    })
  },
  async fetch ({ store }){
    await store.dispatch('posts/loadPosts')
  },
  methods: {
    ...mapActions({
      addComment: 'posts/addComment',
      loadPosts: 'posts/loadPosts',
    }),
    openPost(id){    
      this.currentPost = this.$store.getters['posts/postById'](id)
      this.$bvModal.show('modal-scoped')
    },
    async onPublish(id){
      this.comments.postId = this.currentPost.id
      await this.addComment(this.comments)
      this.comments.comment = ''
    },
    hide(){
      this.comments.comment = ''
      this.$bvModal.hide('modal-scoped')
    }
  },
 
}
</script>

<style scope lang="scss" >
  
  .img-post{
    display: block;
    margin: 10px auto;
    width: 500px;
    height: auto;

    img.post-card{
      display: block;
      max-width: 100%;
      max-height: 100%; 
    }
  }
  .post{
    display:block;
    margin: 20px auto 0px auto;
    background:#F8F8FF;
    border-radius: 5px;
    .icon{
      padding-top: 10px;
      padding-left: 160px;
      max-width: 650px;
       i img{
        width: 29px;
        height: 29px;
        border-radius: 50%;
  }
    }
    .comment-post{
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 650px;
    }
  }
  .button-post{
           border: none;
           border-radius: 5px;
           background: rgb(236, 236, 245);
           color:rgb(61, 61, 61);
           height: 30px;
           width:100px;
           margin: 10px 160px;
           justify-content: center;
           &:hover{
               background: #F8F8FF;
               border: 1px solid rgb(61, 61, 61);
               color:rgb(61, 61, 61);
           }
       }
       .user-comment{
        white-space: pre-line;
        overflow-wrap: break-word;
  }
  .nuxt-link{
    color: rgb(77, 77, 77);
    &:hover{
      text-decoration: none;
      color: rgb(94, 50, 1);
    }
  }
 
  @media (min-width: 768px) and (max-width: 1200px){
    .post{
      .icon{
        padding-left: 95px;
      }
    }
    .button-post{
      margin: 10px 93px;
    }
    .comment-post span{
      margin-right: 55px;
    }
  }
  @media (min-width: 576px) and (max-width: 767.99px){
    .post{
      .icon{
        padding-left: 8px;
      }
    }
    .button-post{
      margin: 10px 5px;
    }
    .comment-post span{
      margin-right: 7px;
    }
  }  
</style>


