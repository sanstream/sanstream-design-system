<template>
  <div class="colors">
    <section
      v-for="category in colorTokensPerCategory"
      :key="category.category"
    >
      <h2
        class="sanstream-heading"
      >{{category.category}}</h2>
      <div
      >
        <figure
          v-for="(prop, index) in category.colours"
          :key="index"
          class="color"
        >
          <div
            class="swatch"
            :style="{ backgroundColor: prop.value }"/>
          <figcaption class="sanstream-body-text">
            <span>
              <strong>{{prop.name}}</strong>
            </span>
            <span>
              <em>Category: </em>
              <strong>{{prop.category}}</strong>
            </span>
            <span>
              <em>HEX: </em>
              <code class="sanstream-special-text">{{prop.value}}</code>
            </span>
            <p>
              {{prop.comment}}
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  </div>
</template>

<script>
import {
  colours
} from '../tokens'
import orderBy from 'lodash.orderby'

export default {
  name: 'Color',
  computed: {
    orderedColorTokens () {
      const newTokens = {}
      for (const name in colours) {
        newTokens[name] = {
          ...colours[name],
          name,
        }
      }
      const byName = orderBy(newTokens, 'name', 'asc')
      const byCategoryAndName = orderBy(byName, 'category')
      return byCategoryAndName
    },

    colorTokensPerCategory () {
      const coloursInArray = Object.keys(colours).map(name => {
        return {
          ...colours[name],
          name,
        }
      })
      const uniqueCategories = Array.from(new Set(coloursInArray.map(colour => colour.category)))
      return uniqueCategories.sort().map(category => {
        return {
          category,
          colours: coloursInArray.filter(colour => colour.category === category),
        }
      })
    },
  },
}
</script>

<style scoped>
.colors {
  margin-top: 1em;
  display: block;
  width: 100%;
  max-width: 1200px;
}

.colors section div {
  display: grid;
  align-content: stretch;
  justify-content: left;
  grid-template-columns:
    1fr 1fr 1fr;
  grid-column-gap: 20px;
}

figure {
  margin: 0;
}

.swatch {
  border: 1px solid rgba(0, 0, 0, 0.08);
  height: 3em;
}

.color {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-bottom: 1em;
  overflow: hidden;
  text-align: left;
}

.color span {
  margin-bottom: 1em;
  line-height: 1.3;
  width: 100%;
  float: left;
}
</style>

<docs>
  ```jsx
  <color/>
  ```
</docs>
