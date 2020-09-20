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
      <SerializedRawContent
        :rawContent="postData._rawContent"
      />
    </div>
  </article>
</template>

<script>
import SerializedRawContent from './SerializedRawContent'
import PostMetaData from '../elements/PostMetaData'
import VueTypes from 'vue-types'

export default {
  name: 'BlogPost',

  components: {
    SerializedRawContent,
    PostMetaData,
  },

  props: {
    postData: VueTypes.object.required,
  },
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
