<template>
  <div
    class="background"
    :style="`background-image: url(${require('@/assets/img/login.jpg')})`"
  >
    <b-container class="d-flex justify-content-center">
      <b-form @submit.prevent="onSubmit" class="auth-form">
        <h3 class="text-center border-of-autorization">Login to Progect A</h3>
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
        <b-button id="login" class="btn-block" type="submit" variant="dark">
          Login
        </b-button>
        <b-toast id="login" title="Autorization error" static no-auto-hide>
          Email or password is incorrect:(
        </b-toast>
        <nuxt-link :to="{ name: 'register' }" class="btn-block btn btn-link"
          >Register</nuxt-link
        >
      </b-form>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    layout: 'empty',
    data: () => ({
      form: {
      email: '',
      password: ''
      }
    }),
    methods: {
      async onSubmit () {
        try{
          await this.$auth.loginWith('local', { data: this.form })
          } 
          catch(e){
          this.$bvToast.show('login')
              console.log(e)
          }
      }
    }
  }
</script>

<style scoped lang="scss">
.background {
    width:100%;
    position:absolute; 
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>