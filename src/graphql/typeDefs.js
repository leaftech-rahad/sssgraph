export const typeDefs = `
  scalar DateTime

  type User {
    id: ID!
    name: String!
    email: String!
    username: String
    phone: String
    address: String
    role: String
    post: [Post]
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Post {
    id: ID!
    
    username: String
    title: String!
    content: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    user: User
  }

  type Query {
    allUsers: [User!]!
    findUser(input: findUser): User
    allPosts: [Post!]!
    findPost(input: findPost): [Post!]!
  }

  input findPost {
    title: String
    username: String
  }

  input findUser {
    username: String
    email: String
  }

  type Mutation {
    createUser(input: createUser): User
    createPost(input: createPost): Post
    deleteUser: Boolean
    deletePost(input: deletePost): Boolean
    me: User
    signIn(input: signIn): User
    signOut: Boolean
  }
  input signIn {
    email: String!
    password: String!
  }

  input createUser {
    name: String!
    email: String!
    username: String!
    phone: String
    address: String
    role: String
    password: String!
  }

  input createPost {
    title: String!
    content: String!
  }

  input deletePost {
    id: ID
  }
`;
