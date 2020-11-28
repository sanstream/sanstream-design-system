<template>
  <form @submit="sendSearchTerm($event)">
    <input
      type="text"
      autocomplete="off"
      autocorrect="off"
      list="ice-cream-flavors"
      class="sanstream-special-text"
      v-model="searchTerm"
      :placeholder="placeholderText"
      @keydown.enter="sendSearchTerm($event)"
    />
    <datalist id="ice-cream-flavors">
      <option
        v-for="suggestion in suggestions"
        :key="suggestion.value"
        :value="suggestion.value"
      >
        {{suggestion.label}}
      </option>
    </datalist>
    <Button
      :onClick="sendSearchTerm"
      variant="cta"
    >{{buttonLabel}}
    </Button>
  </form>
</template>

<script>
import VueTypes from 'vue-types'
import Suggestion from '../../utils/suggestion'
import Button from '../elements/Button'
export default {
  name: 'SearchBox',

  components: {
    Button,
  },

  data () {
    return {
      searchTerm: '',
    }
  },

  props: {
    buttonLabel: VueTypes.string.def('Find'),
    placeholderText: VueTypes.string.def('Type here what you wanna find.'),
    onSubmit: VueTypes.func.def(() => {
      console.warn('no onSubmit applied yet')
    }),
    suggestions: VueTypes.arrayOf(VueTypes.instanceOf(Suggestion)).def([]),
  },

  methods: {
    sendSearchTerm (event) {
      if (event && event.preventDefault) {
        event.preventDefault()
      }
      this.onSubmit(this.searchTerm)
    },
  },
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: row;
  gap: 0.25em;
}

form input[type="text"] {
  flex: 1 1;
  border: 2px solid var(--colour-darkest-colour);
  border-radius: 3px;
  box-shadow: none;
  color: var(--colour-text-colour);
  background-color: var(--colour-lightest-colour);
  line-height: calc(var(--base-size) * 1.2);
  padding: 0 calc(var(--base-size) * 0.5);
}

form input[type="text"]:focus {
  outline: none;
}

form input[type="text"]:focus,
form input[type="text"]:hover {
  border: 2px solid var(--colour-sanstream-orange);
  filter:
    drop-shadow(0px 0px 1px var(--colour-sanstream-yellow))
    drop-shadow(0px 0px 4px var(--colour-sanstream-yellow));
}

form button {
  flex: 0 0;
}
</style>
