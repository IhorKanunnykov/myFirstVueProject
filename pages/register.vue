<template>
  <div
    class="background"
    :style="`background-image: url(${require('@/assets/img/register.jpg')})`"
  >
    <b-container class="d-flex justify-content-center">
      <b-form @submit.prevent="onSubmit" class="auth-form">
        <h3 class="text-center border-of-autorization">Registration</h3>
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
        <b-button class="btn-block" type="submit" variant="dark">
          Register
        </b-button>
        <nuxt-link :to="{ name: 'login' }" class="btn-block btn btn-link"
          >Back to login</nuxt-link
        >
      </b-form>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'Register',
    auth: false,
    middleware: ['login'],
    layout: 'empty',
    data: () => ({
      form: {
        name: '',
        password: '',
        email: '',
        phone: '',
        city: '',
        age: ''
      } 
    }),
    methods: {
      async onSubmit () {
        try{
          await this.$axios.post('/register', this.form)
          await this.$auth.loginWith('local', {
            data: {
              email: this.form.email,
              password: this.form.password
            }
          })
        } catch (e) {
             console.log(e.response)
        }
        this.$router.push("/home")
      }
    }
  }
</script>

<style scoped lang="scss">
  .auth-form {
    padding-top: 10px;
  }
  .background {
    width:100%;
    position:absolute; 
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>