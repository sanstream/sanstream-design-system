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
        <em
          class="sanstream-special-text"
        >{{term}}</em>
        <Button
          variant="textual"
          :onClick="() => {}"
        >
          <Icon
            id="CloseCross"
            titleText="remove"
          />
        </Button>
      </li>
    </ol>
    <div
      v-else
      class="sanstream-special-text"
    >No searchterm applied.</div>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import Button from '../elements/Button'
export default {
  components: { Button, },
  name: 'AppliedSearchTerms',
  props: {
    searchTerms: VueTypes.arrayOf(VueTypes.string.isRequired).def([]),
  },
}
</script>

<style scoped>
.search-terms li {
  display: inline-block;
}
</style>
