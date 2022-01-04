<template>
  <div>
    <h2 class="text-primary font-medium text-xl text-center mb-3">Login</h2>
    <p class="mb-4">Hi, welcome back!</p>
    <Input label="Email" type="text" :inputData.sync="form.userEmail" />
    <Input
      label="Password"
      type="password"
      :inputData.sync="form.userPassword"
    />
    <p
      class="text-right text-sm block text-primary hover:underline cursor-pointer my-5"
    >
      Forgot password?
    </p>

    <button
      class="bg-primary text-white rounded-full px-5 py-3 w-full hover:text-base"
      @click="login"
    >
      Login
    </button>
    <p class="text-sm text-secondary text-center mt-6">
      Don't have an account?
      <span class="text-primary hover:underline cursor-pointer">Sign Up</span>
    </p>
  </div>
</template>

<script>
export default {
  inject: [],
  layout: 'auth',
  data() {
    return {
      form: {
        userEmail: '',
        userPassword: '',
      },
      // email: '',
      // password: '',
      url: this.$config.baseURL,
    }
  },
  created() {},
  methods: {
    async login() {
      // console.log(this.form)
      await this.$axios
        .post(`${this.url}/apikenal/user/login`, this.form)
        .then((res) => {
          // localStorage.setItem('user', JSON.stringify(res.data.data))
          this.$router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>
