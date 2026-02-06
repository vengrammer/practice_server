import Admin from "../../model/user.schema.js"; // adjust path if needed

export const resolvers = {
  Query: {
    admins: async () => {
      return await Admin.find();
    },
    admin: async (_, { id }) => {
      return await Admin.findById(id);
    },
  },

  Mutation: {
    createAdmin: async (_, { name, email, password }) => {
      // Optionally: hash password here before saving
      const newAdmin = new Admin({ name, email, password });
      await newAdmin.save();
      return newAdmin;
    },
  },
};
