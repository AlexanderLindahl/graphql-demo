import { gql, useQuery } from '@apollo/client'
import { Employee } from '../../types/Employee'

export const useEmployees = () => useQuery<{ employees: Employee[] }>(QUERY)

const QUERY = gql`
  query getEmployees {
    employees {
      id
      firstName
      lastName
      title
    }
  }
`
