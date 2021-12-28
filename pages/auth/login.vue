<template>
  <div>
      <h2 class="text-primary font-medium text-xl text-center mb-3">Login</h2>
      <p class="mb-4">Hi, welcome back!</p>
      <Input label="Email" type="text" :inputData.sync="email"/>
      <Input label="Password" type="password" :inputData.sync="password"/>
      <p class="text-right text-sm block text-primary hover:underline cursor-pointer my-5">Forgot password?</p>

      <button class="bg-primary text-white rounded-full px-5 py-3 w-full hover:text-base">Login</button>
      <p class="text-sm text-secondary text-center mt-6">Don't have an account? <span class="text-primary hover:underline cursor-pointer">Sign Up</span></p>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      form : {},
      email: '',
      password: ''
    }
  }
}
</script>

