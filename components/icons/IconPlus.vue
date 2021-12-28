<template>
  <svg width="23" height="23" viewBox="0 0 23 23" :fill="fill" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" width="3" height="23" rx="1.5" />
    <rect x="23" y="10" width="3" height="23" rx="1.5" transform="rotate(90 23 10)" />
  </svg>
</template>

<script>
export default {
  props: ['fill'],
}
</script>
