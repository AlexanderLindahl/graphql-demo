import React from 'react'
import { Typography } from '@material-ui/core'

interface ErrorProps {
  errorMessage: string
}
const Error = (props: ErrorProps) => (
  <Typography component="h5" variant="h5">
    ERROR: {props.errorMessage}
  </Typography>
)

export default Error
