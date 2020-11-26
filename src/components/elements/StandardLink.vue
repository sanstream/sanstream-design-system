<template>
  <a
    class="sanstream-body-text"
    :href="href"><slot /></a>
</template>

<script>
import VueTypes from 'vue-types'

/**
 * Is used for links within text content.
 *
 * Is also used for displaying serialised content
 * coming in from Sanity.io CMS.
 */
export default {
  name: 'StandardLink',
  props: {
    href: VueTypes.string.required,
  },
}
</script>

<style scoped>
a[href] {
  color: var(--sanstream-orange-on-white);
  text-decoration: none;
  display: inline;
  border-bottom: 1px solid transparent;
  border-bottom: 1px solid var(--sanstream-yellow);
}

a[href]:focus,
a[href]:hover {
  outline: none;
  color: var(--sanstream-orange-on-white);
  text-decoration: none;
  border-bottom: 2px solid var(--sanstream-orange);
}
</style>
