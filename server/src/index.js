//this is the bootsrtap or the connection of mongodb and link to the App.js
import app from "./App.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;

await connectDB();

app.listen(PORT, () => {
  console.log(`🚀 REST ready at http://localhost:${PORT}`);
  console.log(`🚀 GraphQL ready at http://localhost:${PORT}/graphql`);
});