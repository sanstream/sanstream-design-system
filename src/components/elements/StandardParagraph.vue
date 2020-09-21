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

<docs>
```jsx
<StandardParagraph>
This is an example of what a
standard paragraphs content would look like.<br />
You can even used the break element in it.
</StandardParagraph>
```
</docs>
