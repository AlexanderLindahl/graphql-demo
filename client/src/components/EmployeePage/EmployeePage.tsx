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
  email: string
  phoneNumber: string
  address: string
  employmentDate: string
}
const employees: Employee[] = [
  {
    id: 1,
    firstName: 'Anders',
    lastName: 'Karlsson',
    title: 'Utvecklare',
    email: 'Anders.Karlsson@forefront.se',
    phoneNumber: '+46738017276',
    address: 'Hittepåvägen 57B',
    employmentDate: '10/9-2019',
  },
  {
    id: 2,
    firstName: 'Emma',
    lastName: 'Andersson',
    title: 'Utvecklare',
    email: 'Emma.Andersson@forefront.se',
    phoneNumber: '+46738017276',
    address: 'Hittepåvägen 57B',
    employmentDate: '1/6-2016',
  },
  {
    id: 3,
    firstName: 'Anna',
    lastName: 'Eriksson',
    title: 'Divisionschef',
    email: 'Anna.Eriksson@forefront.se',
    phoneNumber: '+46738017276',
    address: 'Hittepåvägen 57B',
    employmentDate: '27/6-2004',
  },
]

const EmployeePage = (props: EmployeePageProps) => {
  const id = parseInt(props.match.params.id)

  const employee: Employee = employees.filter((employee) => {
    return employee.id === id
  })[0]

  return <EmployeeInfo employee={employee} />
}

export default EmployeePage
