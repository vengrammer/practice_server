//fulname, department,role,email,username,password
export const userSchema = `#graphql
    type User {
        id: ID!
        fullname: String!
        department: String
        role: String
        email: String!
        username: String!
        createdAt: String!
        updatedAt: String!
    }
    type Query {
        users: [User]!
    }
    type CreateUserResponse{
        message: String!
        user: User!
    }
    type Mutation {
        createUser(
            fullname: String!
            email: String!
            password: String!
            username: String!
            department: String!
            role: String!
        ): CreateUserResponse!
    }
`;
