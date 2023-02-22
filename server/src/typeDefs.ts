export const typeDefs = `
  type Employee {
    id: Int
    firstName: String
    lastName: String
    title: String
    email: String
    skills: [Skill]
    phoneNumber: String
    address: String
    employmentDate: String
  }

  type Skill {
    employeeId: Int
    skill: String
  }

  type Query {
    employees: [Employee]
    employee(id: Int!): Employee
    skills(employeeId: Int!): [Skill]
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
