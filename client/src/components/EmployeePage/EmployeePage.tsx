import React, { Fragment } from 'react'
import { useEmployeePageStyles } from '../../Style'
import { useTheme } from '@material-ui/core/styles'
import { Card, CardContent, Typography, Box } from '@material-ui/core'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Redirect } from 'react-router-dom'

interface EmployeePageProps {
  match: { params: { id: string } }
}

export interface Employee {
  id: number
  firstName: string
  lastName: string
  title: string
  imageUrl: string
  email: string
  phoneNumber: string
  address: string
  employmentDate: string
}
const GET_EMPLOYEE = gql`
  query employee($id: Int!) {
    employee(id: $id) {
      firstName
      lastName
      title
      email
      phoneNumber
      address
      employmentDate
    }
  }
`

const EmployeePage = (props: EmployeePageProps) => {
  const theme = useTheme()
  const classes = useEmployeePageStyles(theme)

  const id = parseInt(props.match.params.id)

  return (
    <Fragment>
      <Query query={GET_EMPLOYEE} variables={{ id }}>
        {({ loading, error, data }: any) => {
          if (loading) {
            return (
              <Typography component="h5" variant="h5">
                {' '}
                LOADING...
              </Typography>
            )
          }
          if (error)
            return (
              <Typography component="h5" variant="h5">
                ERROR: {error.message}
              </Typography>
            )
          if (!data.employee) return <Redirect to="/" />

          const employee = data.employee
          return (
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Box component="span" m={1}>
                    <Typography component="h2" variant="h2">
                      {`${employee.firstName} ${employee.lastName}`}
                    </Typography>
                  </Box>
                  <Box component="span" m={1}>
                    <Typography variant="subtitle1">
                      Roll: {employee.title}
                    </Typography>
                  </Box>
                  <Box component="span" m={1}>
                    <Typography variant="subtitle1">
                      Adress: {employee.address}
                    </Typography>
                  </Box>
                  <Box component="span" m={1}>
                    <Typography variant="subtitle1">
                      Telefonnummer: {employee.phoneNumber}
                    </Typography>{' '}
                  </Box>
                  <Box component="span" m={1}>
                    <Typography variant="subtitle1">
                      Email: {employee.email}
                    </Typography>{' '}
                  </Box>
                  <Box component="span" m={1}>
                    <Typography variant="subtitle1">
                      Anställd sedan: {employee.employmentDate}
                    </Typography>
                  </Box>
                </CardContent>
              </div>
            </Card>
          )
        }}
      </Query>
    </Fragment>
  )
}

export default EmployeePage
