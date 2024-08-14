import gql from "graphql-tag";

export const typeDefs = gql`
  type Note {
    id: ID!
    title: String!
    body: String!
    createdAt: String!
  }
  type Query {
    notes: [Note!]
    note(id: ID!): Note
  }
  type Mutation {
    createNote(title: String!, body: String!): Note!
    updateNote(id: ID!, title: String, body: String): Note!
    deleteNote(id: ID!): [Note!]
  }
`;
