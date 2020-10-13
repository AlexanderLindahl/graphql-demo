import { Employee, employees } from './employees'

export default {
  Query: {
    employee: (_, { id }) => findEmployeeById(id),
    employees: () => employees,
  },
  Mutation: {
    addEmployee: (_, params) => addEmployee(params),
  },
}

const findEmployeeById = (id): Employee => {
  return employees.filter((employee) => {
    return id === employee.id
  })[0]
}

const addEmployee = (input: Employee) => {
  const today = new Date()
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
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
