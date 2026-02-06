import userSchema from "./user/user.schema.js";
import userResolvers from "./user/user.resolver.js";

import projectSchema from "./project/project.schema.js";
import projectResolvers from "./project/project.resolver.js";

const typeDefs = `
  type Query
  type Mutation

  ${userSchema}
  ${projectSchema}
`;

const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...projectResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...projectResolvers.Mutation,
  },
};

export {typeDefs, resolvers}