const express = require("express")
const app = express()
const SERVER_PORT = require("./apis")

const { graphqlHTTP } = require("express-graphql")

const PORT = SERVER_PORT
const CALLBACK = () => console.log(`Server Listening on port ${PORT}`)

const schema = require("./schemas")

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))

// example routes
app.get("/users", (request, response) => {
    response.send(UsersData)
})

app.listen(PORT, CALLBACK)