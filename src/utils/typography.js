import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = () => ({
  a: {
    color: '#0984e3',
  },
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  'a.anchor': {
    boxShadow: 'none',
  },
  'p code': {
    fontSize: '1.1rem'
  },
  'li code': {
    fontSize: '1rem'
  },
  'h1, h2, h3, h4, h5, h6, p, li': {
    fontFamily: 'Noto Serif KR, Merriweather, Georgia, serif',
    color: '#495057'
  },
  'blockquote': {
    fontSize: '1.1rem'
  }
})

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
