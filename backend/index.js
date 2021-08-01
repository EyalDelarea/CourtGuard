const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const schema = buildSchema(`
  type RootQuery {
      events:[String!]!
  }

  type RootMutation {
    createEevent(name:String) : String
  }
schema{
  query:RootQuery
  mutation:RootMutation
}

`);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: { schema },
    graphiql: true,
    rootValue: {
      events: () => {
        return ["event,tstEvent,testEvent"];
      },
      createEvent: (args) => {
        return "Thank you for creating an event" + args;
      },
    },
  })
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
