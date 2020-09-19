<template>
  <!--Everything inlined so the example code is rendered withou weird indentations -->
  <pre :class="`language-${language}`"><code>{{code}}</code></pre>
</template>

<script>
import VueTypes from 'vue-types'
export default {
  name: 'CodeExample',

  props: {
    code: VueTypes.string.required,
    language: VueTypes.string
  }
}
</script>
