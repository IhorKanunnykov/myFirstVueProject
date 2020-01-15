<template>
  <!-- </TheHeader> -->
  <div class="container">
    <!-- *********************************************post********************************************************** -->
    <div class="row" v-for="user of users" :key="user.id">
      <div class="col-lg-9 post">
        <div class="icon">
          <i>
            df
          </i>
          <nuxt-link :to="{ name: 'user', params: { id: user.id } }" exact>
            <strong>{{ user.name }}</strong>
          </nuxt-link>
          <!-- добавь фигурные скобки выше! -->
        </div>
        <div class="img-post">
          <img class="post-card" src="../assets/img/login.jpg" alt="img" />
        </div>
        <div class="comment-post">
          <button class="button-post" @click="openPost">
            Open post!
          </button>
          <span> <i class="fa fa-comments" aria-hidden="true"></i> 5</span>

          <!-- ************************************modal************************************************* -->
        </div>
        <!-- добавь фигурные скобки выше! -->
      </div>
    </div>

    <!-- ************************************modal******************************************** -->

    <b-modal default id="modal-scoped" size="xl" title="View post">
      <div class="row">
        <div class="col-lg-7 modal-card">
          <img class="img-in-modal" src="../assets/img/login.jpg" alt="" />
        </div>
        <div class="col-lg-5 ">
          <div class="modal-comments">
            тут при добавления комментариев добавь сво-во отвечающее за макс
            количество символов в строке иначе будет пизда комментариев добавь
            сво-во отвечающее за макс количество символов в строке иначе будет
            пизда комментариев добавь сво-во

            <div v-for="user of users" :key="user.id">
              <strong>{{ user.name }}</strong>
              <div
                class="user-comment"
                v-for="comment of user.comments"
                :key="comment.id"
              >
                {{ comment.comment }}
              </div>
            </div>
            <!-- <div v-for="usercom of users.comments" :key="usercom.id">
                    {{ usercom.comment }}
                  </div> -->
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
        <b-button size="sm" variant="outline-secondary" @click="hide('forget')">
          Close
        </b-button>
      </template>
    </b-modal>

    <!-- *********************************************post********************************************************** -->

    <!-- <div class="row" v-for="user of users" :key="user.id">
      <div class="col-lg-9 post">
        <div style="background:blue;">{{ user.name }}</div>
        <div>{{ user.email }}</div>
      </div>
    </div> -->
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  // props:{
  //       user:{
  //           type: Object,
  //           required: true
  //       }
  //   },

  data: () => ({
    comments:{
      userId: 1,
      comment:''
    }
  }),
  computed:{
    ...mapGetters ({
      users:'users/users',
      myComments:'comments/comments'
    })
   },
   

// async fetch ({ store }){
//     await store.dispatch('comments/loadComments')
    
//   },
    async fetch ({ store }){
    await store.dispatch('users/loadUsers')
  },
    
 methods: {
   ...mapActions({
     addComment: 'comments/addComment'
   }),
   openPost(){
    //  суда запрос о данных конкретного поста
     this.$bvModal.show('modal-scoped')
   },
   async onPublish(){
     await this.addComment(this.comments)
   }
   
 }

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
      padding-left: 160px;
      max-width: 650px;
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
 
  
</style>


