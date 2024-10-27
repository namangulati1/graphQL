export const schema = `#graphql

    type User {
        _id: ID!,
        name: String,
        email: String,
        password: String,
    }
    type Query {
        users: [User],
    }
`;