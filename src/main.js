import 'tokens.css'
import 'layouts.css'
/**
 * This file exports the Design System.
 */

// Define contexts to require
const contexts = [
  require.context('/src/elements/', true, /\.vue$/),
  require.context('/src/patterns/', true, /\.vue$/),
  require.context('/src/templates/', true, /\.vue$/),
]

// Define components
const components = []
contexts.forEach(context => {
  context.keys().forEach(key => components.push(context(key).default))
})

// Install the above defined components
const SanstreamDesignSystem = {
  install (Vue) {
    components.forEach(component => Vue.component(component.name, component))
  },
}

// Automatic installation if Vue has been added to the global scope
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(SanstreamDesignSystem)
}

// Finally export as default
export default SanstreamDesignSystem
