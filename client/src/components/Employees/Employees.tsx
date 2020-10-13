import React, { Fragment } from 'react'
import EmployeeCard from '../EmployeeCard/EmployeeCard'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Typography } from '@material-ui/core'

const Employees = () => {
  const GET_EMPLOYEES = gql`
    query employees {
      employees {
        id
        firstName
        lastName
        title
      }
    }
  `
  return (
    <Fragment>
      <Query query={GET_EMPLOYEES}>
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

          const employees = data.employees

          return (
            <div>
              {employees.map((employee: any) => {
                return (
                  <EmployeeCard
                    id={employee.id}
                    firstName={employee.firstName}
                    lastName={employee.lastName}
                    title={employee.title}
                  />
                )
              })}
            </div>
          )
        }}
      </Query>
    </Fragment>
  )
}

export default Employees
