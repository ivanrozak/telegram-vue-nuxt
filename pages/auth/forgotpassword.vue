<template>
  <div>
    <h2 class="text-primary font-medium text-xl text-center mb-3">Forgot Password</h2>
    <p class="mb-4">You'll get messages soon on your email</p>
    <Input label="Email" type="text" :inputData.sync="email" placeholder="Enter your email"/>
    <button aria-pressed="true" class="bg-primary mt-6 text-white rounded-full px-5 py-3 w-full hover:text-base active:scale-[95%] transition-all">Send</button>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  }
}
</script>
