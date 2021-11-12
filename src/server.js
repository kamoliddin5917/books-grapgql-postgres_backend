const { ApolloServer } = require("apollo-server");
const modules = require("./modules");

const server = new ApolloServer({ modules });

server.listen(4000, () => {
  console.log("Server running on port 4000");
});
