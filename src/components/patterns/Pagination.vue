<template>
  <nav>
    <SpecialLink
      v-if="links.previous"
      :href="basePath + '/' + (links.previous.link !== 1 ? links.previous.link : '')"
      triangleToText="left"
    >
      back
    </SpecialLink>

    <template
      v-for="page in links.pages"
    >
      <span
        class="sanstream-special-text"
        v-if="pageInfo.currentPage === page.pageNumber"
        :key="page.pageNumber"
      >
        {{page.pageNumber}}
      </span>
      <SpecialLink
        v-else
        :key="page.pageNumber"
        :href="basePath + '/' + (page.pageNumber !== 1 ? page.link : '')"
        triangleToText="none"
      >
        {{page.pageNumber}}
      </SpecialLink>
    </template>

    <SpecialLink
      v-if="links.next"
      :href="basePath + '/' + links.next.link"
      triangleToText="right"
    >
      next
    </SpecialLink>
  </nav>
</template>

<script>
import VueTypes from 'vue-types'
import SpecialLink from '../elements/SpecialLink'

export default {
  name: 'Pagination',

  components: {
    SpecialLink,
  },

  props: {
    pageInfo: VueTypes.object.required,
    basePath: VueTypes.string.required,
  },

  computed: {
    links () {
      return {
        previous: this.pageInfo.hasPreviousPage ? {
          link: this.pageInfo.currentPage - 1,
        } : null,
        next: this.pageInfo.hasNextPage ? {
          link: this.pageInfo.currentPage + 1,
        } : null,
        pages: Array.from(Array(this.pageInfo.totalPages))
          .map((page, index) => {
            const pageNumber = index + 1
            const link = index + 1
            return {
              link,
              pageNumber,
            }
          }),
      }
    },
  },
}
</script>

<style scoped>
  nav > span {
    display: inline-block;
    padding: 2px 4px 0 4px;
    border-bottom: 1px dashed var(--contrasting-border-colour);
    background-color: var(--light-grey-fill);
  }

  nav > * {
    margin: 0 0.5em;
  }
</style>
