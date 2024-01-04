/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx } from '@emotion/react'
import { ReactElement } from 'react'
import { Button as AntButton, ButtonProps } from 'antd'

export function Button({
  children,
  ...rest
}: ButtonProps): ReactElement {


  return (
    <AntButton css={{
      '&.ant-btn': {
        background: 'red',

         '&:active': {
          background: 'green'
        },

        '&:hover': {
          background: 'aqua'
        },

        '&:disabled': {
          background: 'grey'
        },
      }
    }}  {...rest}>
      {children}
    </AntButton>
  )
}
