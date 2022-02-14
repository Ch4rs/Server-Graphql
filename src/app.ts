import express  from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";
const cors = require('cors')
const  app = express()

app.use('/graphql',cors(),graphqlHTTP(
    {
        graphiql:true,
        schema
    }
))
export default app