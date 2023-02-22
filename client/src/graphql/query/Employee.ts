import { gql, useQuery } from '@apollo/client'
import { Employee } from '../../types/Employee'

export const useEmployee = (id: number) =>
  useQuery<{ employee: Employee }>(QUERY, {
    variables: { id },
    skip: !id,
  })

const QUERY = gql`
  query employee($id: Int!) {
    employee(id: $id) {
      id
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
