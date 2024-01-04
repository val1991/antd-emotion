/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx } from '@emotion/react'
import { Col } from 'antd'
import { PropsWithChildren, ReactElement } from 'react'

export function Text({
  children,
}: PropsWithChildren): ReactElement {


  return (
    <Col
      css={{
        color: 'red',

        '&:active': {
          background: 'green'
        },

        '&:hover': {
          background: 'aqua'
        },
      }}
    >
      {children}
    </Col>
  )
}
