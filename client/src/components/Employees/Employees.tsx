import React from 'react'
import EmployeeCard from '../EmployeeCard/EmployeeCard'
import Loading from '../EmployeePage/Loading'
import Error from '../EmployeePage/Error'
import { useEmployees } from '../../../../client/src/graphql/query/Employees'

const Employees = () => {
  const { loading, error, data } = useEmployees()

  if (loading) {
    return <Loading />
  } else if (error) {
    return <Error errorMessage={error.message} />
  } else if (data) {
    return (
      <>
        {data.employees.map((employee, index) => (
          <EmployeeCard key={index} employee={employee} />
        ))}
      </>
    )
  } else {
    return <Error errorMessage="No data found" />
  }
}

export default Employees
