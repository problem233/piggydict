import { hot } from 'react-hot-loader/root'

import { css } from '@emotion/core'

// import consts from './constants'

import MainMenu from './components/MainMenu'

const style = css({
  minHeight: '100%',
  boxSizing: 'border-box',
  overflow: 'auto',
  backgroundColor: 'lightcyan',
  color: 'black',
  fontFamily: 'sans-serif',
  '@media screen and (max-width: 576px)': {
    width: '100vw'
  },
  '@media screen and not (max-width: 576px)': {
    width: 576,
    margin: 'auto'
  },
  h1: {
    fontWeight: 'normal'
  }
})

const App = () => <div css={style}><MainMenu /></div>

export default hot(App)
