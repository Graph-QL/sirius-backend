const { GraphQLServer } = require('graphql-yoga');



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

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
})

server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`,
  ),
)

