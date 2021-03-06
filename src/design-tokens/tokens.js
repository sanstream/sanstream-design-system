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
    comment: 'Main colour used in logo\'s and icons',
  },
  'sanstream-orange-on-white': {
    value: '#ab3e01',
    category: 'text',
    comment: `variant of sanstream-orange that contrasts enough
    with white to be legible. Best used for links.`,
  },
  'sanstream-yellow': {
    value: colourPalette.brandSupport.value,
    category: 'brand',
    comment: 'Supporting colour used in logo\'s and icons',
  },
  'range-orange': {
    value: colourPalette.brandMain.value,
    category: 'data-visualisation',
    comment: 'Used for colour ranges, in combination with another range colour.',
  },
  'range-yellow': {
    value: colourPalette.brandSupport.value,
    category: 'data-visualisation',
    comment: 'Used for colour ranges, in combination with another range colour.',
  },
  'range-red': {
    value: '#E8290C',
    category: 'data-visualisation',
    comment: 'Used for colour ranges, in combination with another range colour.',
  },
  'range-magenta': {
    value: '#FE0072',
    category: 'data-visualisation',
    comment: 'Used for colour ranges, in combination with another range colour.',
  },
  'range-green': {
    value: '#99c511',
    category: 'data-visualisation',
    comment: 'Used for colour ranges, in combination with another range colour.',
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
