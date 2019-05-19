import { css } from '@emotion/core'

interface Props {
  children: string
}

export default ({ children: name }: Props) =>
  <span className={`icon-${name}`} css={{
    ':before': { margin: 'auto' }
  }} />
