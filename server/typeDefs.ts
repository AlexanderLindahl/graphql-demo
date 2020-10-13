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
    employee(id: Int!): Employee
    employees: [Employee]
    hello: String
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
