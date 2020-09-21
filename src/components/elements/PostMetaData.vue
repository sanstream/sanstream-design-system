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
    /**
     * date needs to be provided as a UTC timestamp string, like "2020-20-10T00:00:00Z"
     */
    publishedOn: VueTypes.string.required,
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

<docs>
```jsx
<PostMetaData
  publishedOn="2020-10-10T00:00:00Z"
/>
```
</docs>
