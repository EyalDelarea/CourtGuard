const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "../frontend", "build")));
app.use(express.static("public"));

const events = [];

const schema = buildSchema(`


type Event {
  _id: ID!
  title: String!
  description: String!
  price: Float!
  date: String!
}

input EventInput{
  title: String!
  description: String!
  price: Float!
}

  type RootQuery {
      events: [Event!]
  }

  type RootMutation {
    createEvent(eventInput: EventInput): Event
  }
schema{
  query: RootQuery
  mutation: RootMutation
}

`);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
    rootValue: {
      events: () => {
        return events;
      },
      createEvent: (args) => {
        const event={
          _id:Math.random().toString(),
          title:args.eventInput.title,
          description:args.eventInput.description,
          price:args.eventInput.price,
          date: new Date().toISOString
        };
        console.log(event)
        events.push(event);
        return event;
      },
    },
  })
);

app.listen(port, () => {
  console.log(`Server is now running http://localhost:${port}`);
});
