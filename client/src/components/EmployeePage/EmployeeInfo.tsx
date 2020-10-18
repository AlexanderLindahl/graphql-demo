import React from 'react'
import { Card, CardContent, Typography, Box } from '@material-ui/core'
import { Employee } from './EmployeePage'
import { useEmployeePageStyles } from '../../Style'
import { useTheme } from '@material-ui/core/styles'

interface ErrorProps {
  employee: Employee
}
const EmployeeInfo = (props: ErrorProps) => {
  const theme = useTheme()

  const classes = useEmployeePageStyles(theme)

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
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
