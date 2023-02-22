import React from 'react'
import { Employee } from '../../../../client/src/types/Employee'
import { Box, Card, CardContent, Typography } from '@mui/material'

interface ErrorProps {
  employee: Employee
}
const EmployeeInfo = (props: ErrorProps) => {
  return (
    <Card>
      <div>
        <CardContent>
          <Box component="span" m={1}>
            <Typography component="h2" variant="h2">
              {`${props.employee.firstName} ${props.employee.lastName}`}
            </Typography>
          </Box>
          <Box component="span" m={1}>
            <Typography variant="subtitle1">
              Roll: {props.employee.title}
            </Typography>
          </Box>
          <Box component="span" m={1}>
            <Typography variant="subtitle1">
              Adress: {props.employee.address}
            </Typography>
          </Box>
          <Box component="span" m={1}>
            <Typography variant="subtitle1">
              Telefonnummer: {props.employee.phoneNumber}
            </Typography>{' '}
          </Box>
          <Box component="span" m={1}>
            <Typography variant="subtitle1">
              Email: {props.employee.email}
            </Typography>{' '}
          </Box>
          <Box component="span" m={1}>
            <Typography variant="subtitle1">
              Anställd sedan: {props.employee.employmentDate}
            </Typography>
          </Box>
        </CardContent>
      </div>
    </Card>
  )
}

export default EmployeeInfo
