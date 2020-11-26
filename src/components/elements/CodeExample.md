```jsx
  <script>
  const codeSample = `
nav > * {
  margin: 0 0.5em;
}`
  export default {
    data () {
      return {
        codeSample,
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