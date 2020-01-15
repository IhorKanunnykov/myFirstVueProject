<template>
  <div class="container">
    <div class="row user-info">
      <div class="col-lg-9">
        <div class="user-data">
          <!-- <h3 v-for="user of users" :key="user.id">{{ user.name }}</h3> -->
          <h3 class="user-name">
            user.name <i class="fa fa-cog" @click="openModalRedact"></i>
          </h3>
          <!-- ***********************modal redact***********************8 -->

          <b-modal id="modal-redact" scrollable title="Scrollable Content">
            <p class="my-4" v-for="i in 20" :key="i"></p>
          </b-modal>
          <!-- ***********************modal redact END***********************8 -->

          <p><strong>Age:</strong> user.age</p>
          <p><strong>City:</strong> user.city</p>
          <button class="add-post">Add post!</button>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="avatar">
          <img class="avatar-card" src="../assets/img/1234.jpg" alt="img" />
        </div>
      </div>
    </div>
    <!-- ___________________________________________________________________________________ -->
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
            тут при добавления комментариев добавь сво-во отвечающее за макс
            количество символов в строке иначе будет пизда комментариев добавь
            сво-во отвечающее за макс количество символов в строке иначе будет
            пизда комментариев добавь сво-во отвечающее за макс количество
            символов в строке иначе будет пизда комментариев добавь сво-во
            отвечающее за макс количество символов в строке иначе будет пизда
            комментариев добавь сво-во отвечающее за макс количество символов в
            строке иначе будет пизда комментариев добавь сво-во отвечающее за
            макс количество символов в строке иначе будет пизда комментариев
            добавь сво-во отвечающее за макс количество символов в строке иначе
            будет пизда комментариев добавь сво-во отвечающее за макс количество
            символов в строке иначе будет пизда комментариев добавь сво-во
            отвечающее за макс количество символов в строке иначе будет пизда
            комментариев добавь сво-во отвечающее за макс количество символов в
            строке иначе будет пизда комментариев добавь сво-во отвечающее за
            макс количество символов в строке иначе будет пизда комментариев
            добавь сво-во отвечающее за макс количество символов в строке иначе
            будет пизда комментариев добавь сво-во отвечающее за макс количество
            символов в строке иначе будет пизда
          </div>
          <!-- __________________________________________________ -->
          <div class="form-comment">
            <b-form @submit.prevent="" class="b-form-comment">
              <b-form-textarea
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
    <!-- *************************************modal******************************************** -->
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
        ><i class="icon fa fa-comments" aria-hidden="true"></i
      ></label>
      <!-- добавь фигурные скобки выше! -->
    </div>
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
        ><i class="icon fa fa-comments" aria-hidden="true"></i
      ></label>
      <!-- добавь фигурные скобки выше! -->
    </div>
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
        ><i class="icon fa fa-comments" aria-hidden="true"></i
      ></label>
      <!-- добавь фигурные скобки выше! -->
    </div>
  </div>
</template>

<script>
export default {
    name: 'Profile',
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //тут нужно переделать запрос,когда научимся получить залогининого
    //юзера,нужно запрос перенести в store и написать методы для
    //для удаление юзера и для редактирования
       //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    async asyncData ({ $axios }) {
        let users = []
        try{
            users = await $axios.$get('/users')
        } catch (e) {
            console.log(e)
         }
   return { users }
 },
 methods: {
    openPost(){
      this.$bvModal.show('modal-scoped')
    },
    openModalRedact(){
      this.$bvModal.show('modal-redact')
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
 
</style>