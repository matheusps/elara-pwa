const darkShape = {
  '--color-base': '#142032',
  '--color-base--contrast': '#ffffff',
  '--color-primary': '#0c131d',
  '--color-primary--contrast': '#ffffff',
}

const lightShape = {
  '--color-base': '#ffffff',
  '--color-base--contrast': '#142032',
  '--color-primary': '#142032',
  '--color-primary--contrast': '#ffffff',
}

function theme(id, shape) {
  const styles = document.documentElement.style
  return {
    id,
    colors: {
      base: shape['--color-base'],
      baseContrast: shape['--color-base--contrast'],
      primary: shape['--color-primary'],
      primaryContrast: shape['--color-primary--contrast'],
    },
    apply: () => {
      Object.keys(shape).map((key) => styles.setProperty(key, shape[key]))
    },
  }
}

export const light = theme('light', lightShape)
export const dark = theme('dark', darkShape)
