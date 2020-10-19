import { gql } from 'apollo-server'

export default gql`
  type Employee {
    id: Int
    firstName: String
    lastName: String
    title: String
    email: String
    phoneNumber: String
    address: String
    employmentDate: String
  }

  type Query {
    employees: [Employee]
    employee(id: Int!): Employee
  }

  type Mutation {
    addEmployee(
      firstName: String
      lastName: String
      title: String
      email: String
      phoneNumber: String
      address: String
      employmentDate: String
    ): Employee
  }
`
