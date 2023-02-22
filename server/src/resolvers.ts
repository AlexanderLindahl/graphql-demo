import { Employee, employees } from './employees.js'
import { Skill, skills } from './skills.js'

export const resolvers = {
  Query: {
    employees: () => employees,
    employee: (_: any, { id }: { id: number }) => findEmployeeById(id),
    skills: (_: any, { employeeId }: { employeeId: number }) =>
      findSkills(employeeId),
  },

  Employee: {
    skills: (employee) => findSkills(employee.id),
  },

  Mutation: {
    addEmployee: (_: any, params: Employee) => addEmployee(params),
  },
}

const findEmployeeById = (id: number): Employee => {
  return employees.find((employee) => id === employee.id)
}

const findSkills = (employeeId: number): Skill[] =>
  skills.filter((skill) => skill.employeeId === employeeId)

const addEmployee = (input: Employee) => {
  const today = new Date()
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0')
  const yyyy = today.getFullYear()

  const todayDate = mm + '/' + dd + '/' + yyyy
  const employee: Employee = {
    id: employees.length + 1,
    firstName: input.firstName,
    lastName: input.lastName,
    title: input.title,
    email: input.email,
    phoneNumber: input.phoneNumber,
    address: input.address,
    employmentDate: todayDate,
  }
  employees.push(employee)
  return employee
}
