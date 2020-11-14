<template>
  <!--Everything inlined so the example code is rendered withou weird indentations -->
  <pre :class="`language-${language}`"><code>{{convertedCode}}</code></pre>
</template>

<script>
import Prism from 'prismjs'
import VueTypes from 'vue-types'
Prism.highlightAll()

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

  computed: {
    convertedCode () {
      return Prism.highlight(this.code, Prism.languages[this.language], this.language)
    },
  },
}
</script>

<docs>
```jsx
<script>
export default {
  data () {
    return {
      codeSample: `
nav > span {
    display: inline-block;
    padding: 2px 4px 0 4px;
    border-bottom: 1px dashed var(--contrasting-border-colour);
    background-color: var(--light-grey-fill);
  }

  nav > * {
    margin: 0 0.5em;
  }
      `,
    }
  },
}
</script>

<template>
<CodeExample
  :code="codeSample"
  language="css"
/>
</template>
```
</docs>
