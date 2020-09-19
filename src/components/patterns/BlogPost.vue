<template>
  <article>
    <div
      :class="`text-content`"
    >
      <header>
        <h1
          class="sanstream-heading"
        >
          {{postData.title}}
        </h1>
        <PostMetaData
          class="meta-data"
          :publishedOn="postData.publishedOn"
        />
      </header>

      <!-- <FramedImage
        v-if="mainImage"
        class="main-image"
        :src="mainImage.asset.url"
      /> -->
      <SerializedRawContent
        :rawContent="postData._rawContent"
      />
    </div>
  </article>
</template>

<script>
import SerializedRawContent from './SerializedRawContent'
import FramedImage from '../elements/FramedImage'
import PostMetaData from '../elements/PostMetaData'
import SpecialLink from '../elements/SpecialLink'
import VueTypes from 'vue-types'

export default {
  name: 'BlogPost',

  components: {
    SerializedRawContent,
    FramedImage,
    PostMetaData,
    SpecialLink
  },

  props: {
    postData: VueTypes.object.required
  }
}
</script>

<style scoped>
article {
  margin-bottom: calc(3 * var(--base-size));
}

header {
  margin-bottom: var(--base-size);
}

.meta-data {
  margin-top: var(--base-size);
}

</style>
