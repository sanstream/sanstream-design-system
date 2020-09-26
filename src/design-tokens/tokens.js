const colourPalette = {
  brandMain: {
    value: '#FF5C00',
  },
  brandSupport: {
    value: '#FE9800',
  },
  darkGrey: {
    value: '#4D4D4D',
  },
}

const colours = {
  'sanstream-orange': {
    value: colourPalette.brandMain.value,
    category: 'brand',
  },
  'sanstream-yellow': {
    value: colourPalette.brandSupport.value,
    category: 'brand',
  },
  'range-orange': {
    value: colourPalette.brandMain.value,
    category: 'data-visualisation',
  },
  'range-yellow': {
    value: colourPalette.brandSupport.value,
    category: 'data-visualisation',
  },
  'range-red': {
    value: '#E8290C',
    category: 'data-visualisation',
    comment: 'Colouring used colour ranges in visualisations.',
  },
  'range-magenta': {
    value: '#FE0072',
    category: 'data-visualisation',
    comment: 'Colouring used colour ranges in visualisations.',
  },
  'range-green': {
    value: '#99c511',
    category: 'data-visualisation',
    comment: 'Colouring used colour ranges in visualisations.',
  },
  'lightest-colour': {
    value: '#ffffff',
    category: 'background',
  },
  'darkest-colour': {
    value: '#4D4D4D',
    category: 'background',
  },
  'text-colour': {
    value: colourPalette.darkGrey.value,
    category: 'text',
  },
  'text-on-dark-colour': {
    value: '#ffffff',
    category: 'text',
  },
  'toned-down-colour': {
    value: '#ABABAB',
    category: 'border',
  },
  'light-grey-fill': {
    value: '#E3E3E3',
    category: 'background',
  },
  'middle-grey-fill': {
    value: '#C4C4C4',
    category: 'background',
  },
  'dark-grey-fill': {
    value: '#878787',
    category: 'background',
  },
}

/**
 * Adds all design tokens as css variables.
 */
function addCssVariables () {
  const rootStyle = document.documentElement.style

  for (const id in colours) {
    const composedVar = `--colour-${id}`
    rootStyle.setProperty(composedVar, colours[id].value)
  }
}

export {
  colours,
  addCssVariables
}
