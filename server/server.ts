import { ApolloServer } from 'apollo-server'
import resolvers from './resolvers'
import typeDefs from './typeDefs'

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const PORT = process.env.port || 9000

server
  .listen(PORT)
  .then(({ url }) => console.log(`Server ready at ${url}graphql `))
