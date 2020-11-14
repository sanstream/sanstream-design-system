import './tokens.css'
import './layouts.css'
import CodeExample from './components/elements/CodeExample'

/**
 * This file exports the Design System.
 */

// Define contexts to require
const contexts = [
  require.context('./components/elements/', true, /\.vue$/),
]

// Define components
const components = []
contexts.forEach(context => {
  context.keys().forEach(key => components.push(context(key).default))
})

// Install the above defined components
const SanstreamDesignSystem = {
  install (Vue) {
    components.forEach(component => {
      return Vue.component(component.name, component)
    })
  },
}

// Automatic installation if Vue has been added to the global scope
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(SanstreamDesignSystem)
}

// Finally export as default
export default SanstreamDesignSystem
export {
  CodeExample
}
