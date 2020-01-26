<template>
  <div class="container">
    <div class="row user-info">
      <div class="col-lg-9">
        <div class="user-data">
          <!-- <h3 v-for="user of users" :key="user.id">{{ user.name }}</h3> -->
          <h3 class="user-name">
            user.name <i class="fa fa-cog" @click="openModalRedact"></i>
          </h3>
          <!-- ***********************modal redact*********************** -->
          <b-modal id="modal-redact" scrollable title="Readact yuor profile">
            <p class="my-4" v-for="i in 20" :key="i"></p>
            <b-container class="container-in-modal-redact">
              <b-form @submit.prevent="">
                <!-- добавь submit.prevent,допиши метод -->
                <b-form-group label="Name:" label-for="name">
                  <b-form-input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    style="background:rgba(0, 0, 0, 0.1);"
                  >
                  </b-form-input>
                </b-form-group>
                <b-form-group label="Age:" label-for="age">
                  <b-form-input
                    id="Age"
                    v-model="form.age"
                    type="text"
                    required
                    placeholder="How old are you?"
                    style="background:rgba(0, 0, 0, 0.1);"
                  >
                  </b-form-input>
                </b-form-group>
                <b-form-group label="Email address:" label-for="email">
                  <b-form-input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="Enter email"
                    style="background:rgba(0, 0, 0, 0.1);"
                  >
                  </b-form-input>
                </b-form-group>
                <b-form-group label="Password:" label-for="email">
                  <b-form-input
                    id="Password"
                    v-model="form.password"
                    type="password"
                    required
                    placeholder="Enter password"
                    style="background:rgba(0, 0, 0, 0.1);"
                  >
                  </b-form-input>
                </b-form-group>
                <b-form-group label="Phone:" label-for="phone">
                  <b-form-input
                    id="Phone"
                    v-model="form.phone"
                    type="text"
                    required
                    placeholder="Enter your phone"
                    style="background:rgba(0, 0, 0, 0.1);"
                  >
                  </b-form-input>
                </b-form-group>
                <b-form-group label="City:" label-for="city">
                  <b-form-input
                    id="City"
                    v-model="form.city"
                    type="text"
                    required
                    placeholder="where are you from?"
                    style="background:rgba(0, 0, 0, 0.1);"
                  >
                  </b-form-input>
                </b-form-group>
                <b-form-group label="Avatar:" label-for="avatar">
                  <b-form-file
                    id="Avatar"
                    v-model="form.avatar"
                    :state="Boolean(file)"
                    placeholder="Choose a file or drop it here..."
                    drop-placeholder="Drop file here..."
                    accept="image/jpeg, image/png, image/gif"
                  ></b-form-file>
                </b-form-group>
                <b-button
                  type="submit"
                  class="btn-block"
                  variant="outline-secondary"
                >
                  Ok
                </b-button>
              </b-form>
            </b-container>
            <template v-slot:modal-footer="{ ok, cancel, hide }">
              <b-button
                size="sm"
                variant="outline-secondary"
                @click="hide('forget')"
              >
                Close
              </b-button>
            </template>
          </b-modal>
          <!-- ***********************modal redact END*********************** -->

          <p><strong>Age:</strong> user.age</p>
          <p><strong>City:</strong> user.city</p>
          <button class="add-post" @click="openModalAddPost">Add post!</button>
          <!-- ***********************modal addPost************************ -->
          <b-modal id="addPost" title="Hey, post me!">
            <b-form @submit.prevent="onPublishPost" class="b-form-comment">
              <p class="my-2">Here you can add photos and comments.</p>
              <div class="b-form-file">
                <b-form-file
                  v-model="post.img"
                  :state="Boolean(file)"
                  placeholder="Choose a file or drop it here..."
                  drop-placeholder="Drop file here..."
                  accept="image/jpeg, image/png, image/gif"
                ></b-form-file>
              </div>
              <div class="form-textarea">
                <b-form-textarea
                  v-model="post.description"
                  id="textarea-no-resize"
                  placeholder="Fixed height textarea"
                  rows="1"
                  no-resize
                ></b-form-textarea>
              </div>

              <b-button
                size="sm"
                type="submit"
                variant="outline-secondary"
                class="btn-block"
              >
                Publish
              </b-button>
            </b-form>
            <template v-slot:modal-footer="{ ok, cancel, hide }">
              <b-button
                size="sm"
                variant="outline-secondary"
                @click="hide('forget')"
              >
                Close
              </b-button>
            </template>
          </b-modal>
          <!-- ***********************end of modal addPost***************** -->
        </div>
      </div>
      <div class="col-lg-3">
        <div class="avatar">
          <img class="avatar-card" src="../assets/img/1234.jpg" alt="img" />
        </div>
      </div>
    </div>
    <!-- _____________________________________post____________________________________________ -->
    <div class="col-lg-4 post-user">
      <div class="img-post-user">
        <img
          @click="openPost"
          class="img-post-card-user"
          src="../assets/img/1234.jpg"
          alt="img"
        />
      </div>
      <label class="comment-post-user"
        ><i class="icon fa fa-comments " aria-hidden="true"></i>5</label
      >
    </div>
    <!-- _____________________________________end of post____________________________________________ -->

    <!-- *************************************modal******************************************** -->
    <b-modal default id="modal-scoped" size="xl" title="View post">
      <div class="row">
        <div class="col-lg-7 modal-card">
          <img class="img-in-modal" src="../assets/img/1234.jpg" alt="" />
        </div>
        <div class="col-lg-5 ">
          <div class="modal-comments">
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
                class="form-textarea-add-post"
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
    <!-- *************************************end of modal******************************************** -->
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  name: 'Profile',
  data: () => ({
    currentPost: null,
    form: {
      name: '',
      password: '',
      email: '',
      phone: '',
      city: '',
      age: '',
      avatar: null
    },
    post: {
      userId: 1,
      img: null,
      description: ''
    },
    comments:{
      userId: 2,
      postId: 1,
      comment:''
    }
  }),
  computed:{
    ...mapGetters ({
      myComments:'comments/comments',
      posts:'posts/posts',
    })
  },
  async asyncData ({ $axios }) {
    let users = {}
    try{
      users = await $axios.$get('/users')
    } catch (e) {
      console.log(e)
    }
   return { users }
  },
  methods: {
    ...mapActions({
     addComment: 'comments/addComment',
     publishPost: 'posts/publishPost',
     loadPosts: 'posts/loadPosts'
    }),
    openPost(id){
      this.currentPost = this.$store.getters['posts/postById'](id)
      this.$bvModal.show('modal-scoped')
    },
    openModalRedact(){
      this.$bvModal.show('modal-redact')
    },
    openModalAddPost(){
      this.$bvModal.show('addPost')
    },
    async onPublish(){
      this.comments.postId = this.currentPost.id//для добавления коммента в конкретный пост
      await this.addComment(this.comments)
      this.comments.comment = ''
      // await this.loadPosts()
      this.currentPost = this.$store.getters['posts/postById'](this.currentPost.id)

    },
    async onPublishPost(){
      await this.publishPost(this.post)
      this.post.description = ''
    },
    hide(){
        this.$bvModal.hide('modal-scoped')
        this.comments.comment = ''
      }
  }
 
}
</script>

<style scope lang="scss">
// ********************************************user-info***************************************************
  .user-info{
    background:#F8F8FF;
    margin-top: 20px;
    height: 350px;
    border-radius: 3px;
  }
  .avatar{
    display: block;
    margin: 5px auto;
    width:250px;
    height: 250px;
    margin-top: 50px;
      .avatar-card{
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 125px;
      }
  }
  .user-data{
    margin-top: 70px;
    padding-left:270px;
      h3{
        text-align: center;
      }
      .add-post{
          border: none;
          border-radius: 5px;
          background: rgb(61, 61, 61);
          color:rgb(235, 235, 213);
          height: 30px;
          width:100px;
          display: block;
          margin: 100px auto 0 auto;
            &:hover{
              background: #F8F8FF;
              border: 1px solid rgb(61, 61, 61);
              color:rgb(61, 61, 61);
            }
      }
  }
     
    
    
    // ********************************************user-posts***************************************************
  .img-post-user{
    display: block;
    margin: 10px auto;
      .img-post-card-user{
        display: block;
        max-width: 100%;
        max-height: 100%; 
        margin: 0 auto;
          &:hover{
            cursor: pointer;
          }
      }
  }
  .post-user{
    display:inline-block;
    margin: 0 -3px;
      .comment-post-user{
        margin-bottom: -10px;
          .icon{
              margin-left: 150px;
          }
      }
  }
  .user-name {
    font-size: 30px;
    font-weight: bold;
      i{
        &:hover{
          color:rgb(158, 149, 149);
        }
      }
  }
  .b-form-file{
    margin-bottom: 10px;
  }
    // .form-textarea-add-post{
    //     margin-bottom: 10px;
    //   }
  .container-in-modal-redact{
    margin-top: -20px;
  }
 
</style>