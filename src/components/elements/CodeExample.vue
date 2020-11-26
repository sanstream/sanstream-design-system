<template>
  <!--Everything inlined so the example code is rendered withou weird indentations -->
  <pre :class="`language-${language}`">
    <code class="sanstream-special-text">
      <span v-html="convertedCode" />
    </code>
  </pre>
</template>

<script>
import Prism from 'prismjs'
import VueTypes from 'vue-types'

/**
 * Displays code examples for 'html', 'javascript' and 'css' using
 * [prism.js](https://prismjs.com/).
 */
export default {
  name: 'CodeExample',

  props: {
    /** the code to display */
    code: VueTypes.string.required,
    /** What type of code it is */
    language: VueTypes.oneOf([
      'javascript',
      'js',
      'css',
      'html',
    ]),
  },

  mounted () {
    // Prism needs to interact with the DOM,
    // which is loaded when the component is mounted:
    Prism.highlightAll()
  },

  computed: {
    convertedCode () {
      return Prism.highlight(this.code, Prism.languages[this.language], this.language)
    },
  },
}
</script>

<style scoped>
code {
  font-size: 100%;
}
</style>
