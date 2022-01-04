<template>
  <div class="auth">
    <div class="section">
      <nuxt />
    </div>
  </div>
</template>

<style>
.auth {
  @apply h-screen w-full px-20 flex justify-center items-center bg-grey;
}
.section {
  @apply bg-white p-8 shadow-md rounded-3xl w-full max-w-[350px] h-full flex items-center justify-center max-h-[500px];
}
</style>
