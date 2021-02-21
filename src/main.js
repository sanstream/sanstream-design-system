import './tokens.css'
import './layouts.css'
import StandardLink from './components/elements/StandardLink'
import StandardParagraph from './components/elements/StandardParagraph'
import CodeExample from './components/elements/CodeExample'
import Suggestion from './utils/suggestion'
import {
  addCssVariables
} from './design-tokens/tokens'
import DataKraai from 'data-kraai'

/**
 * This file exports the Design System.
 */

// Define contexts to require
const contexts = [
  require.context('./components/elements/', true, /\.vue$/),
  require.context('./components/patterns/', true, /\.vue$/),
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
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    // add tokens as css variables to the DOM:
    addCssVariables()
  })
}

// Finally export as default
export default SanstreamDesignSystem

// some components are exposed directly to be used in serilisation of content.
// This needs access to the components directly.
export {
  StandardLink,
  StandardParagraph,
  CodeExample,
  Suggestion,
  DataKraai
}
