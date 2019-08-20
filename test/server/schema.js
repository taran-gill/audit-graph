const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        books: [Book!]!,
        authors: [Author!]!,
        openForBusiness: Boolean!
    }

    type Book {
        name: String,
        author: Author,
        isbn: ID!
    }

    type Author {
        name: String
        id: ID!,,
        books: [Book!]!,
        birthplace: String
    }
`;

module.exports = typeDefs;