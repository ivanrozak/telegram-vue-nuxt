<template>
  <div>
    <h2 class="text-primary font-medium text-xl text-center mb-3">Register</h2>
    <p class="mb-4">Let's create your account!</p>
    <Input label="Name" type="text" :inputData.sync="name" placeholder="Enter your name"/>
    <Input label="Email" type="text" :inputData.sync="email" placeholder="Enter your email"/>
    <Input label="Password" type="password" :inputData.sync="password" placeholder="Enter your password"/>
    <button aria-pressed="true" class="bg-primary mt-6 text-white rounded-full px-5 py-3 w-full hover:text-base active:scale-[95%] transition-all">Register</button>
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
