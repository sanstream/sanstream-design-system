<template>
  <FramedImage
    :src="imageUrl"
  />
</template>

<script>
import VueTypes from 'vue-types'
import { getImageUrl } from '@sanity/block-content-to-hyperscript/internals'
import FramedImage from './FramedImage'
export default {
  name: 'StandardImage',

  components: {
    FramedImage,
  },

  props: {
    /**
     * asset is the sanity.io image asset
     * passed to the serialiser.
     */
    asset: VueTypes.object,
  },

  computed: {
    imageUrl () {
      return getImageUrl({
        node: {
          asset: this.asset,
        },
        options: {
          projectId: 'he47alh5',
          dataset: 'production',
        },
      })
    },
  },
}
</script>
