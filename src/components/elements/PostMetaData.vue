<template>
  <small class="sanstream-special-text">
    Published on {{formatDate(publishedOn)}}.
  </small>
</template>

<script>
import VueTypes from 'vue-types'
import { formatDate } from '../../utils/datetime'

export default {
  name: 'PostMetaData',
  props: {
    publishedOn: VueTypes.string.required,
    partOfCategories: VueTypes.array.required,
  },

  data () {
    return {
      formatDate,
    }
  },
}
</script>

<style scoped>
small {
  display: block;
  font-size: 12px;
}
</style>
