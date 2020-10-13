const employees = require('./employees')

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
} = require('graphql')

const EmployeeType = new GraphQLObjectType({
  name: 'Employee',
  fields: () => ({
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    title: { type: GraphQLString },
    imgageUrl: { type: GraphQLString },
    email: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    address: { type: GraphQLString },
    employmentDate: { type: GraphQLString },
  }),
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    employees: {
      type: new GraphQLList(EmployeeType),
      resolve(parent, args) {
        return employees
      },
    },
    employee: {
      type: EmployeeType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve(parent, args) {
        result = findEmployeeById(args.id)
        console.log(result)
        return result[0]
      },
    },
  },
})

const mutation = new GraphQLObjectType({
  name: 'mutation',
  fields
  addEmployer: (employee) => {
    employees.push({
      employee,
    })
    return employee.id
  },

  editEmployer: () => {},
})

const findEmployeeById = (id) => {
  return employees.filter((employee) => {
    return employee.id === id
  })
}

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: mutation,
})
