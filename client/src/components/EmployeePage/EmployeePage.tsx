import React from 'react'
import Error from './Error'
import Loading from './Loading'
import EmployeeInfo from './EmployeeInfo'
import { useParams } from 'react-router-dom'
import { useEmployee } from '../../../../client/src/graphql/query/Employee'

const EmployeePage = () => {
  const { id } = useParams()

  // {loading, error, data}
  const result = useEmployee(parseInt(id!!))

  if (result.loading) {
    return <Loading />
  } else if (result.data) {
    return <EmployeeInfo employee={result.data.employee} />
  } else {
    const errorMessage =
      result?.error?.message || 'Something horrific happenend'
    return <Error errorMessage={errorMessage} />
  }
}

export default EmployeePage
