const { gql } = require("apollo-server");

const schema = `
    type Query {
        getBooks: [Book!]!
    }
    type Book {
        id: Int!
        created_at: String!
        author: String!
        book_name: String!
        price: Int!
    }
    type Mutation {
        createBook(author:String!, bookName:String!, price:Int!): String!
        updateBook(id:Int!, author:String!, bookName:String!, price:Int!): String!
        deleteBook(id:Int!): String!
    }
`;

module.exports = gql(schema);
