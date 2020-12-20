<template>
  <section>
    <ol class="sanstream-no-list-styles">
      <li
        v-for="spectrumId in ordering"
        :key="spectrumId"
      >
        <h3
          class="sanstream-heading"
        >
          {{dataMappers[spectrumId].label}}
        </h3>
        <ol class="sanstream-no-list-styles">
          <template
            v-for="(step, index) in dataMappers[spectrumId].dataRange"
          >
            <li
              class="spectrum-item"
              :key="`${spectrumId}-${index}`"
              :data-is-active="String(enhancedData[spectrumId].type === 'array' ? enhancedData[spectrumId].parsedData.includes(step) : false)"
            >
              <small class="sanstream-special-text">
                {{dataMappers[spectrumId].dataRangeLabels[index]}}
              </small>
            </li>
          </template>
        </ol>
      </li>
    </ol>
  </section>
</template>

<script>
import VueTypes from 'vue-types'
import DataMapper from '../../utils/dataMapper'

/**
 * Data visualisation used as part of 'That LGBTQIA+ identity explainer'.
 * A person's LGBTQIA+ identity is mapped onto a data structure (see below)
 * and displayed as a visualisation.
 */
export default {
  name: 'SpectrumPositionsGraph',

  props: {
    ordering: VueTypes.arrayOf(VueTypes.string.isRequired).isRequired,
    dataMappers: VueTypes.objectOf(VueTypes.instanceOf(DataMapper).isRequired).isRequired,
    spectraData: VueTypes.object,
  },

  computed: {
    enhancedData () {
      const results = {}
      this.ordering.forEach(spectrumId => {
        const parsedData = this.dataMappers[spectrumId].getData(this.spectraData)
        console.log(parsedData)
        results[spectrumId] = {
          type: Array.isArray(parsedData) ? 'array' : typeof parsedData,
          parsedData,
        }
      })
      return results
    },
  },
}
</script>

<style scoped>
li.spectrum-item {
  content: '';
  display: inline-block;
  min-width: 3rem;
  width: calc((100% / 5) - 0.25rem);
  max-width: 6rem;
  margin-right: 0.25rem;
  vertical-align: top;
  text-align: center;
}
li.spectrum-item:before {
  content: '';
  display: block;
  height: 0.25rem;
  background: var(--colour-light-grey-fill);
}

li.spectrum-item[data-is-active="true"]:before {
  background: var(--colour-range-green);
}

li.spectrum-item[data-is-applicable="false"]:before {
  background: var(--colour-range-red);
}
</style>
