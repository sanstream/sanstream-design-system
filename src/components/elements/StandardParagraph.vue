<template>
  <p class="sanstream-body-text">
    <slot />
  </p>
</template>

<script>
export default {
  name: 'StandardParagraph',
}
</script>

<style scoped>
p:first-child {
  margin-top: 0;
}
</style>
