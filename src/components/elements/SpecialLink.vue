<template>
  <a
    class="sanstream-special-text special-link"
    :class="`${triangleToText} ${hasDarkParent && 'hasDarkParent'}`"
    :href="href">
    <PointerTriangle
      v-if="triangleToText === 'left'"
    />
    <span class="displayed-text">
      <slot />
    </span>
    <PointerTriangle
      v-if="triangleToText === 'right'"
    />
  </a>
</template>

<script>
import VueTypes from 'vue-types'
import PointerTriangle from './PointerTriangle'

/**
 * This component is used for links that are also
 * call to actions.
 */
export default {
  name: 'SpecialLink',

  components: {
    PointerTriangle,
  },

  props: {
    href: VueTypes.string.required,
    triangleToText: VueTypes.oneOf([
      'left',
      'right',
      'none',
    ]).def('right'),
    hasDarkParent: VueTypes.bool.def(false),
  },
}
</script>

<style>
a[href].special-link {
  color: var(--text-colour);
  text-decoration: none;
  display: inline-block;
  height: 22px;
  line-height: 22px;
  }

a[href].special-link.hasDarkParent {
  color: var(--text-on-dark-colour);
}

a[href].special-link .displayed-text {
  display: inline-block;
  text-transform: capitalize;
  padding: 0 0.25em;
  border-bottom: 1px solid var(--sanstream-yellow);
}

a[href].special-link:focus {
  outline: none;
}

a[href].special-link:focus .displayed-text,
a[href].special-link:hover .displayed-text {
  border-bottom: 2px solid var(--sanstream-orange);
}

a[href].special-link svg {
  display: inline-block;
  vertical-align: middle;
  position: relative;
  top: -1px;
}

a[href].special-link.left svg {
  transform: rotate(180deg);
  margin-right: 0.5em;
}

a[href].special-link.right svg {
  margin-left: 0.5em;
}

a[href].special-link svg path {
  transition: fill 0.1s linear;
  stroke: none;
  fill: var(--sanstream-orange);
}

a[href].special-link:focus svg,
a[href].special-link:hover svg {
  filter:
    /* drop-shadow(0px 0px 1px var(--sanstream-yellow)) */
    drop-shadow(0px 0px 6px var(--sanstream-yellow));
}

a[href].special-link:focus svg path,
a[href].special-link:hover svg path {
  fill: var(--sanstream-yellow);
}
</style>

<docs>
```jsx
<div>
  <SpecialLink
    triangleToText="left"
    href="https://duckduckgo.com"
  >
    arrow to the left
  </SpecialLink>
  <br />
  <SpecialLink
    triangleToText="none"
    href="https://duckduckgo.com"
  >
    no arrow
  </SpecialLink>
  <br />
  <SpecialLink
    triangleToText="right"
    href="https://duckduckgo.com"
  >
    arrow to the right
  </SpecialLink>
  <br />
</div>
```

```jsx
<div
  style="backgroundColor: var(--darkest-colour)"
>
  <SpecialLink
    triangleToText="left"
    href="https://duckduckgo.com"
    :hasDarkParent="true"
  >
    arrow to the left
  </SpecialLink>
  <br />
  <SpecialLink
    triangleToText="none"
    href="https://duckduckgo.com"
    :hasDarkParent="true"
  >
    no arrow
  </SpecialLink>
  <br />
  <SpecialLink
    triangleToText="right"
    href="https://duckduckgo.com"
    :hasDarkParent="true"
  >
    arrow to the right
  </SpecialLink>
  <br />
</div>
```
</docs>
