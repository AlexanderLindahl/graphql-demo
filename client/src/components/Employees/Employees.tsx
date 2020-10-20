import React from 'react'
import EmployeeCard from '../EmployeeCard/EmployeeCard'
import { Query, QueryResult } from 'react-apollo'
import gql from 'graphql-tag'
import Loading from '../EmployeePage/Loading'
import Error from '../EmployeePage/Error'

const Employees = () => {
  interface Employee {
    id: number
    firstName: string
    lastName: string
    title: string
  }

  const GET_EMPLOYEES = gql`
    query getEmployees {
      employees {
        id
        firstName
        lastName
        title
      }
    }
  `

  return (
    <Query query={GET_EMPLOYEES}>
      {({ loading, error, data }: QueryResult<{ employees: Employee[] }>) => {
        return (
          <>
            {loading ? (
              <Loading />
            ) : error ? (
              <Error errorMessage={error.message} />
            ) : data ? (
              data.employees.map((employee, index) => {
                return <EmployeeCard key={index} employee={employee} />
              })
            ) : (
              <Error errorMessage="No data found" />
            )}
          </>
        )
      }}
    </Query>
  )
}

export default Employees
