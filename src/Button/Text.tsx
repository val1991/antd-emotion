/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx } from '@emotion/react'
import { PropsWithChildren, ReactElement } from 'react'

export function Text({
  children,
}: PropsWithChildren): ReactElement {


  return (
    <div css={{
      color: 'red'
    }} >
      {children}
    </div>
  )
}
