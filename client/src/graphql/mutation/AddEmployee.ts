import { gql, useMutation } from '@apollo/client'

export const useAddEmployee = () => useMutation(MUTATION)

const MUTATION = gql`
  mutation employee(
    $firstName: String
    $lastName: String
    $title: String
    $email: String
    $phoneNumber: String
    $address: String
  ) {
    addEmployee(
      firstName: $firstName
      lastName: $lastName
      title: $title
      email: $email
      phoneNumber: $phoneNumber
      address: $address
    ) {
      id
    }
  }
`
