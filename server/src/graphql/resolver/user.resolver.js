import User from "../../model/user.model.js";
import { userValidator } from "../validator/user.validator.js";
// data = fullname, department, role, email, username, password, timestamps

export const userResolvers = {
  Query: {
    users: async () => {
       const user = await User.find();
       return user;
    },
  },

  Mutation: {
    createUser: async (_, args) => {
      try{
        userValidator.parse(args);
        const newUser = await User.create({
          fullname: args.fullname,
          email: args.email,
          username: args.username,
          password: args.password,
          department: args.username,
          role: args.role || ["user"]
        });
      return {
        message: "User created successfully",
        user: {
          id: newUser._id,
          fullname: newUser.fullname,
          email: newUser.email,
          username: newUser.username,
          department: newUser.department,
          role: newUser.role,
          createdAt: newUser.createdAt.toISOString(),
          updatedAt: newUser.updatedAt.toISOString(),
        },
      };
      }catch(error){
        throw new Error(error.message);
      }
    }
  },
};