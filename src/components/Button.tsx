import { css } from '@emotion/core'

interface Props {
  children: any
}

const style = css({
  borderRadius: '50vh',
  padding: '0.35em',
  backgroundColor: 'rgba(255, 255, 255, 40%)',
  boxShadow: '0 1px 4px 0 rgba(12, 12, 12, 10%)',
  textAlign: 'center',
  transition: 'all 0.25s ease-out',
  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 80%)'
  },
  ':active': {
    backgroundColor: 'rgba(255, 255, 255, 100%)'
  }
})

export default ({ children, ...props }: Props) =>
  <div css={style} {...props}>{children}</div>
