<template>
  <figure>
    <div>
      <img
        :src="src"
        :alt="alt"
      />
    </div>
  </figure>
</template>

<script>
import VueTypes from 'vue-types'

/**
 * Standard element to display images with.
 */
export default {
  name: 'FramedImage',
  props: {
    src: VueTypes.string.required,
    alt: VueTypes.string.required,
  },
}
</script>

<style scoped>
figure {
  border: 1px solid var(--colour-toned-down-border-colour);
  margin: 1em 0;
}

div {
  border: calc(0.5 * var(--base-size) - 1px) solid var(--colour-background);
  overflow: hidden;
  max-height: 100%;
}

img {
  display: block;
  width: 100%;
  min-width: 100%;
}
</style>
