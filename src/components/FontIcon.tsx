import { css } from '@emotion/core'

interface Props {
  [key: string]: boolean
}

export default (props: Props) =>
  <span className={`icon-${Object.keys(props)[0]}`} css={{
    ':before': { margin: 'auto' }
  }} />
