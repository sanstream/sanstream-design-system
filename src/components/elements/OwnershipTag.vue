<template>
  <small class="sanstream-special-text">
    by
    <StandardLink
      href="https://www.sanstream.nl"
      target="_blank">
      Studio Sanstream
    </StandardLink>&nbsp;©&nbsp;{{yearOfCreation}}
  </small>
</template>

<script>
import VueTypes from 'vue-types'
import StandardLink from './StandardLink'

/**
 * A way to tag anything not directly on sanstream.nl being owned by me.
 *
 * Is always shown in conjuction with a website or tool's name. For
 * that reason it's size is also reduced.
 */
export default {
  name: 'OwnershipTag',

  components: {
    StandardLink,
  },

  props: {
    yearOfCreation: VueTypes.integer.isRequired,
  },
}
</script>

<style scoped>
small {
  font-size: 0.8rem;
  /* keep it's own weight: */
  font-weight: initial;
}
</style>
