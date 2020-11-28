An example of an **asexual transgender lesbian**:
```jsx
<script>
import DataMapper from '../../utils/dataMapper'
const ordering = [
  'genderIdentity',
  'bioSex',
  'transition',
  'sexualAttraction',
  'romanticAttraction',
]
const dataMappers = {
  'genderIdentity': new DataMapper({
    label: 'Gender identity',
    mapper: d => d.ratings.genderIdentity,
    dataRange: [-2, -1, 0, 1, 2],
    dataRangeLabels: ['man', null, null, null, 'woman'],
  }),
  'bioSex': new DataMapper({
    label: 'Biological sex',
    mapper: d => d.ratings.biologicalSex,
    dataRange: [-2, -1, 0, 1, 2],
    dataRangeLabels: ['man', null, null, null, 'woman'],
  }),
  'transition': new DataMapper({
    label: 'Gender transition',
    mapper: d => d.ratings.genderTransition,
    dataRange: [0, 1, 2, 4, 5],
    dataRangeLabels: ['fully (trans)', null, null, null, 'none (cis)'],
  }),
  'sexualAttraction': new DataMapper({
    label: 'Sexually attracted to',
    mapper: d => d.ratings.sexuallyAttractedTo,
    dataRange: [-2, -1, 0, 1, 2],
    dataRangeLabels: ['men', null, null, null, 'women'],
  }),
  'romanticAttraction': new DataMapper({
    label: 'Romantically attracted to',
    mapper: d => d.ratings.romanticallyAttractedTo,
    dataRange: [-2, -1, 0, 1, 2],
    dataRangeLabels: ['men', null, null, null, 'women'],
  }),
  'description': new DataMapper({
    mapper: d => d.description,
  }),
}

const spectraData = {
		"ratings": {
			"genderIdentity": [2],
			"biologicalSex": [-2],
			"genderTransition": [0],
			"sexuallyAttractedTo": false,
			"romanticallyAttractedTo": [0,1,2]
		},
		"description": "A transgender woman who is not sexually attracted, but can be romantically attracted to women."
}
export default {
  data () {
    return {
      ordering,
      dataMappers,
      spectraData,
    }
  },
}
</script>
<template>
  <SpectrumPositionGraphs
    :ordering="ordering"
    :dataMappers="dataMappers"
    :spectraData="spectraData"
  />
</template>
```