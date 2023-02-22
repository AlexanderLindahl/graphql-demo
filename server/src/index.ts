import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { resolvers } from './resolvers.js'
import { typeDefs } from './typeDefs.js'

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const PORT = 8000

const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
})

console.log(`Server running on: ${url}`)
