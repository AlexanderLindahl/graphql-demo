import React from 'react'
import gql from 'graphql-tag'
import { Query, QueryResult } from 'react-apollo'
import { Redirect } from 'react-router-dom'
import Error from './Error'
import Loading from './Loading'
import EmployeeInfo from './EmployeeInfo'

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
  const id = parseInt(props.match.params.id)

  return (
    <Query query={GET_EMPLOYEE} variables={{ id }}>
      {({
        loading,
        error,
        data,
      }: QueryResult<{ employee: Employee }, Record<string, any>>) => {
        return (
          <>
            {loading ? (
              <Loading />
            ) : error ? (
              <Error errorMessage={error.message} />
            ) : data ? (
              <EmployeeInfo employee={data.employee} />
            ) : (
              <Redirect to="/" />
            )}
          </>
        )
      }}
    </Query>
  )
}

export default EmployeePage
