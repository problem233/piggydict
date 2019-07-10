import { css } from '@emotion/core'

// import consts from '../constants'

import Button from './Button'
import FontIcon from './FontIcon'

export default () => <div css={{ height: '100vh' }}>
  <div css={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }}>
    <h1 css={{ margin: 0, fontSize: 48 }}>Piggydict</h1>
    <Button css={{ width: '8em', marginTop: 20, fontSize: '21px' }}>Search</Button>
  </div>
  <Button css={{
    position: 'absolute',
    top: '78%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '1.15em',
    fontSize: 16
  }}><FontIcon settings /></Button>
  <div css={{
    position: 'absolute',
    bottom: 2,
    left: '50%',
    transform: 'translate(-50%)',
    fontSize: '12px',
    color: 'lightblue'
  }}>version 0.0.1</div>
</div>
