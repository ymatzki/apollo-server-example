const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type Query {
    uploads: [File]
  }

  type Mutation {
    singleUpload(file: Upload!): File!
  }
`;

const resolvers = {
  Query: {
    uploads: (parent, args) => {},
  },
  Mutation: {
    singleUpload: (parent, args) => {
      return args.file.then(file => {
        console.log(`📁 File get ${file.filename}`);
        return file;
      });
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
