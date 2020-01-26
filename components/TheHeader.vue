<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand :to="{ name: 'home' }">Project A</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!-- <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form @submit.prevent="onSearch">
            <b-form-input
              v-model="searchUser.name"
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button type="submit" size="sm" class="my-2 my-sm-0"
              >Search
            </b-button>
            <!-- @click.prevent="onSearch" -->
          </b-nav-form>

          <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
          </b-nav-item-dropdown> -->

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item :to="{ name: 'profile' }">Profile</b-dropdown-item>
            <b-dropdown-item @click.prevent="onSignOut" href="#"
              >Sign Out</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-modal id="modal-search" title="Your search">
      <div class="modal-search">
        Nothing found on your request:(
      </div>
      <div class="my-4 text-in-search" v-for="user of users" :key="user.id">
        <div v-if="searchUser.name === user.name">
          <p>According to your request found:</p>
          <nuxt-link
            :to="{ name: 'user', params: { id: user.id } }"
            exact
            class="nuxt-link"
          >
            <strong @click="hide">{{ user.name }}</strong>
          </nuxt-link>
        </div>
      </div>

      <template v-slot:modal-footer="{}">
        <b-button size="sm" variant="outline-secondary" @click="hide">
          Close
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'TheHeader',
  data: () => ({
    searchUser:{
      name:''
    }
  }),
  computed:{
    ...mapGetters ({
      users:'users/users',
    })
   },
  
    methods:{
      ...mapActions({
      loadUsers: 'users/loadUsers',
    }),
      async onSignOut () {
    //    this.$auth.fetchUser() //это позволит выводить инфу о текущем пользователе
        await this.$auth.logout() 
        this.$router.replace({ name: 'login' })
      },
      async onSearch(event){
        await await this.loadUsers()
        this.$bvModal.show('modal-search')
      },
      hide(){
        this.$bvModal.hide('modal-search')
        this.searchUser.name = ''
      }
    }
  }

</script>

<style scoped>
  .text-in-search{
    position: absolute;
    top: -20px;
    background:rgb(255, 255, 255);
    
  }
  .modal-search{
    height: 40px;
  }
</style>