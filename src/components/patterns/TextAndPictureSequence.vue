<template>
  <article
    class="TextAndPictureSequence sanstream-grid-layout"
  >
    <svg class="TextAndPictureSequence--line" width="3" height="2000" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="2" y1="0" x2="2" y2="2000" stroke="#ABABAB" stroke-linecap="round" stroke-dasharray="6 6"/>
    </svg>
    <section
      class="TextAndPictureSequence--item"
      v-for="item in sequence"
      :key="item._key"
    >
      <svg
        width="13"
        height="13"
        class="TextAndPictureSequence--item-connector"
      >
        <circle cx="5.5" cy="5.5" r="5.5" fill="white" stroke="#ABABAB"/>
      </svg>
      <div
        class="TextAndPictureSequence--item-text sanstream-intro-text"
      >
        <p v-for="chunck in item._rawText"
           :key="chunck._key"
        >
          {{chunck.children.map(child => child.text).join(' ')}}
        </p>
      </div>
      <figure
        class="TextAndPictureSequence--item-figure"
        v-if="item.picture">
        <g-image :src="item.picture.asset.url" :alt="item.picture.altText"/>
      </figure>
    </section>
  </article>
</template>

<script>
import VueTypes from 'vue-types'

export default {
  name: 'TextAndPictureSequence',
  props: {
    sequence: VueTypes.array,
  },
}
</script>

<style>

figure {
  margin: 0;
}

.TextAndPictureSequence {
  position: relative;
}

.TextAndPictureSequence--item .TextAndPictureSequence--item-figure  img {
  max-width: 100%;
}

@media (min-width: 920px) {
  .TextAndPictureSequence--line {
    position: absolute;
    height: 100%;
    width: 3px;
    left: calc(50% - 3px);
    top: 0;
  }

  .TextAndPictureSequence--item:first-of-type::before {
    content: '';
    display: block;
    position: absolute;
    left: calc(50% - 3px);
    top: 0;
    height: calc(50% - 7.5px);
    width: 3px;
    z-index: 1;
    background: var(--colour-background);
  }

  .TextAndPictureSequence--item:last-of-type::after {
    content: '';
    display: block;
    position: absolute;
    left: calc(50% - 3px);
    bottom: 0;
    height: calc(50%);
    width: 3px;
    z-index: 1;
    background: var(--colour-background);
  }

  .TextAndPictureSequence--item {
    grid-column: 2 / 8;
    place-self: center;
    display: grid;
    grid-template-areas: "left right";
    flex-direction: row;
    gap: calc(4 * var(--base-size));
    position: relative;
  }

  .TextAndPictureSequence--item .TextAndPictureSequence--item-figure {
    width: calc(15 * var(--base-size));
  }

  .TextAndPictureSequence--item .TextAndPictureSequence--item-text {
    align-self: center;
  }

  .TextAndPictureSequence--item:nth-child(even) .TextAndPictureSequence--item-text {
    grid-area: left;
    text-align: right;
  }

  .TextAndPictureSequence--item .TextAndPictureSequence--item-text > *:first-child {
    margin-top: 0;
  }

  .TextAndPictureSequence--item:nth-child(even) .TextAndPictureSequence--item-figure {
    grid-area: right;
  }

  .TextAndPictureSequence--item:nth-child(odd) .TextAndPictureSequence--item-text {
    grid-area: right;
  }

  .TextAndPictureSequence--item:nth-child(odd) .TextAndPictureSequence--item-figure {
    grid-area: left;
  }

  .TextAndPictureSequence--item .TextAndPictureSequence--item-connector {
    position: absolute;
    left: calc(50% - 7px);
    top: calc(50% - 7.5px);
    z-index: 2;
  }
}

@media (max-width: 920px) {
  .TextAndPictureSequence--line,
  .TextAndPictureSequence--item-connector,
  .TextAndPictureSequence--item:first-of-type::before,
  .TextAndPictureSequence--item:first-of-type::after {
    display: none;
  }

  .TextAndPictureSequence--item {
    display: block;
  }

  .TextAndPictureSequence--item:nth-child(even) .TextAndPictureSequence--item-text {
    text-align: left;
  }
}

</style>
