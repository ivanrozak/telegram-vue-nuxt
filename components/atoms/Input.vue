<template>
  <div class="mb-2">
    <label class="text-secondary text-sm">{{label}}</label>
    <input :type="type" v-model="inputData" @keyup="$emit('update:inputData', inputData);" :placeholder="placeholder ? placeholder : ''"/>
  </div>
</template>

<script>
export default {
  props: ['label', 'type', 'inputData', 'placeholder']
}
</script>

<style scoped>
  input {
    @apply border-b border-base appearance-none bg-transparent w-full text-base py-2 px-1 leading-tight focus:outline-none;
  }
</style>
