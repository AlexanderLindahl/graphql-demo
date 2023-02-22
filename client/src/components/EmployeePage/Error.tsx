import { Typography } from '@mui/material'
import React from 'react'

interface ErrorProps {
  errorMessage: string
}
const Error = (props: ErrorProps) => (
  <Typography component="h5" variant="h5">
    ERROR: {props.errorMessage}
  </Typography>
)

export default Error
