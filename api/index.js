require("dotenv").config();
import cors from "cors";
import express from "express";
import graphqlHTTP from "express-graphql";
import mongoose from "mongoose";
import schema from "./schema";

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(
    () => {
      console.log("Database is connected");
    },
    err => {
      console.log("Can not connect to the database" + err);
    }
  );

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "notetaking api v1"
  });
});

app.use("/graphql", graphqlHTTP({ schema: schema, graphiql: true }));

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on PORT ${process.env.PORT}`);
});
