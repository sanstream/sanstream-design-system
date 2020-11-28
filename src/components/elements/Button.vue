<template>
  <button
    :class="`sanstream-special-text variant-${variant}`"
    :type="type"
    @click="onClick($event)"
  >
    <slot />
  </button>
</template>

<script>
import VueTypes from 'vue-types'
export default {
  name: 'Button',
  props: {
    variant: VueTypes.oneOf([
      'textual', 'cta',
    ]),
    onClick: VueTypes.func.isRequired,
    type: VueTypes.oneOf([
      'button', 'submit',
    ]).def('button'),
  },
}
</script>

<style scoped>
button {
  display: inline-block;
  cursor: pointer;
}

button.variant-cta {
  border: 2px solid var(--colour-sanstream-orange);
  border-radius: 3px;
  box-shadow: none;
  color: var(--colour-text-colour);
  font-weight: bold;
  background-color: var(--colour-lightest-colour);
  line-height: calc(var(--base-size) * 1.2);
  padding: 0 calc(var(--base-size) * 0.5);
}

button.variant-cta:focus {
  outline: none;
}

button.variant-cta:focus,
button.variant-cta:hover {
  filter:
    drop-shadow(0px 0px 1px var(--colour-sanstream-yellow))
    drop-shadow(0px 0px 4px var(--colour-sanstream-yellow));
}

button.variant-textual {
  border: 0;
  box-shadow: none;
  background-color: inherit;
  color: var(--colour-sanstream-orange);
}

button.variant-textual:focus {
  outline: none;
}

button.variant-textual:focus *,
button.variant-textual:hover * {
  filter:
    drop-shadow(0px 0px 1px var(--colour-sanstream-yellow))
    drop-shadow(0px 0px 4px var(--colour-sanstream-yellow));
}
</style>
