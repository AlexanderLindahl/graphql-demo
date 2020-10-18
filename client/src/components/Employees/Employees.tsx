import React from 'react'
import EmployeeCard from '../EmployeeCard/EmployeeCard'
import { Query, QueryResult } from 'react-apollo'
import gql from 'graphql-tag'
import { Redirect } from 'react-router-dom'
import Loading from '../EmployeePage/Loading'
import Error from '../EmployeePage/Error'

const Employees = () => {
  interface Employee {
    id: string
    firstName: string
    lastName: string
    title: string
  }
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
    <Query query={GET_EMPLOYEES}>
      {({
        loading,
        error,
        data,
      }: QueryResult<{ employees: Employee[] }, Record<string, any>>) => {
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
              <Redirect to="/" />
            )}
          </>
        )
      }}
    </Query>
  )
}

export default Employees
