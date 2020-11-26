<template>
  <p class="sanstream-body-text">
    <slot />
  </p>
</template>

<script>
/**
 * Used for displaying body text
 *
 * Also used for serialised content coming from sanity.io's CMS.
 */
export default {
  name: 'StandardParagraph',
}
</script>

<style scoped>
p:first-child {
  margin-top: 0;
}
</style>
