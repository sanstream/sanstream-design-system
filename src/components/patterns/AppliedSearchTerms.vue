<template>
  <div>
    <ol
      class="search-terms sanstream-no-list-styles"
      v-if="searchTerms.length"
    >
      <li
        v-for="term in searchTerms"
        :key="term"
      >
        <Button
          variant="textual"
          :onClick="() => removeTerm(term)"
          class="search-terms-tag-button"
        >
          <em
            class="sanstream-special-text"
          >{{term}}</em>
          <Icon
            icon
            id="CloseCross"
            titleText="remove"

          />
        </Button>
      </li>
    </ol>
    <StandardParagraph
      v-else
      class="sanstream-special-text"
    >
      <slot name="noSearchTermsMessage">
        No search terms applied.
      </slot>
    </StandardParagraph>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import Button from '../elements/Button'
import StandardParagraph from '../elements/StandardParagraph'
export default {
  components: { Button, StandardParagraph, },
  name: 'AppliedSearchTerms',
  model: {
    prop: 'searchTerms',
    event: 'update',
  },

  props: {
    searchTerms: VueTypes.arrayOf(VueTypes.string.isRequired).def([]),
  },

  methods: {
    removeTerm (removedTerm) {
      const updatedTerms = this.searchTerms.filter(term => term !== removedTerm)
      this.$emit('update', updatedTerms)
    },
  },
}
</script>

<style scoped>
.search-terms {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  flex-direction: row;
}

.search-terms .search-terms-tag-button {
  border: 1px dashed var(--colour-dark-grey-fill);
  padding: 0 0.25rem 0 0.75rem;
  border-radius: 1rem;
  height: 2rem;
  line-height: 2rem;
}

.search-terms li button em {
  font-size: 1.1rem;
}
</style>
