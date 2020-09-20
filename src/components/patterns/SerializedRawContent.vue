<template>
  <BlockContent
    class="sanstream-block-content"
    :blocks="rawContent"
    :serializers="serializers"
    projectId="he47alh5"
    dataset="production"
  />
</template>

<script>
import VueTypes from 'vue-types'
import BlockContent from 'sanity-blocks-vue-component'
import StandardLink from '../elements/StandardLink'
import StandardParagraph from '../elements/StandardParagraph'
import StandardImage from '../elements/StandardImage'
import CodeExample from '../elements/CodeExample'

export default {
  name: 'SerializedRawContent',

  components: {
    BlockContent,
  },

  computed: {
    serializers () {
      return {
        types: {
          block: StandardParagraph,
          image: StandardImage,
          code: CodeExample,
        },
        marks: {
          link: StandardLink,
        },
      }
    },
  },

  props: {
    rawContent: VueTypes.array.required,
  },
}
</script>
