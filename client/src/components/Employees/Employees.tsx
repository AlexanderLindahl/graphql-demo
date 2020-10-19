import React from 'react'
import EmployeeCard from '../EmployeeCard/EmployeeCard'
import { Query, QueryResult } from 'react-apollo'
import gql from 'graphql-tag'
import { Redirect } from 'react-router-dom'
import Loading from '../EmployeePage/Loading'
import Error from '../EmployeePage/Error'

const Employees = () => {
  interface Employee {
    id: number
    firstName: string
    lastName: string
    title: string
  }

  const employees: Employee[] = [
    {
      id: 1,
      firstName: 'Anders',
      lastName: 'Karlsson',
      title: 'Utvecklare',
    },
    {
      id: 2,
      firstName: 'Emma',
      lastName: 'Andersson',
      title: 'Utvecklare',
    },
    {
      id: 3,
      firstName: 'Anna',
      lastName: 'Eriksson',
      title: 'Divisionschef',
    },
  ]

  return (
    <>
      {employees.map((employee, index) => {
        return <EmployeeCard key={index} employee={employee} />
      })}
    </>
  )
}

export default Employees
