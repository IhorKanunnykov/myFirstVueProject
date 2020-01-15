<template>
  <div class="container">
    <div class="row user-info">
      <div class="col-lg-9">
        <div class="user-data">
          <!-- <h3 v-for="user of users" :key="user.id">{{ user.name }}</h3> -->
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
    
    name: 'User',

    async asyncData ({ $axios, params }) {
        let user = {}
        try{
            user = await $axios.$get(`/users/${params.id}`)
        } catch (e) {
            console.log(e)
         }
         console.log(user)
   return { user }

    },
    methods: {
    openPost(){
     this.$bvModal.show('modal-scoped')
   }
 }
}
</script>

<style scope lang="scss">
</style>