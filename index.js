const { GraphQLServer } = require('graphql-yoga');


const dinnerOptions = ['🍕', '🌭', '🍔', '🥗', '🍣'];

const typeDefs = `
  type Query {
    whatsForDinner: String!
  }
`

const resolvers = {
  Query: {
    whatsForDinner: (_, args) => {
      const idx = Math.floor(Math.random() * dinnerOptions.length);
      const foodChoice = dinnerOptions[idx];
      return `Tonight we eat ${foodChoice}`;
    }
  },
}

const options = {
  port: 3333,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`,
  ),
)

// const opts = {
//   port: 7777,
//   endpoint: '/graphql'
// }

// const server = new GraphQLServer({ typeDefs, resolvers, opts });

// server.start(() => {
//   console.log(
//     `😄 Server running at http://localhost:${opts.port}${opts.endpoint}`
//   );
// });