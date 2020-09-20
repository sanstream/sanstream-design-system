<template>
  <article
    class="blog--posts-item sanstream-grid-layout"
  >
    <FramedImage
      v-if="mainImage"
      class="blog--posts-item-main-image"
      :src="mainImage.asset.url"
    />
    <div
      :class="`blog--posts-item-text-content ${!mainImage && 'no-main-image'}`"
    >
      <header>
        <h1
          class="sanstream-heading"
        >
          {{title}}
        </h1>
        <PostMetaData
          class="blog--posts-item-meta-data"
          :publishedOn="publishedOn"
        />
      </header>

      <SerializedRawContent
        v-if="postBody && postBody.length"
        :rawContent="postBody.filter((e, index) => index < 2)"
      ></SerializedRawContent>
      <SpecialLink
        :href="`/post/${id}`"
      >
        read more
      </SpecialLink>
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
  name: 'allSanityPost',
  components: {
    SerializedRawContent,
    FramedImage,
    PostMetaData,
    SpecialLink,
  },

  props: {
    id: VueTypes.string.required,
    title: VueTypes.string.required,
    mainImage: VueTypes.object,
    postBody: VueTypes.array,
    publishedOn: VueTypes.string.required,
    partOfCategories: VueTypes.array.required,
  },
}
</script>

<style scoped>
.blog--posts-item {
  margin-bottom: calc(3 * var(--base-size));
}

.blog--posts-item h1 {
  margin: 0;
}

.blog--posts-item-meta-data {
  margin-top: var(--base-size);
}

.blog--posts-item-main-image {
  margin: 0 0 2em 0;
  grid-column: 1 / 4;
  grid-row: 1;
}

.blog--posts-item-main-image img {
  width: 100%;
}

.blog--posts-item-text-content {
    margin: 0;
    /* grid-area: 2 / 4 / 2 / 9; */
    grid-column: 4 / 9;
    grid-row: 1;
}

.blog--posts-item-text-content.no-main-image {
  grid-column: 1 / 9;
}

</style>
