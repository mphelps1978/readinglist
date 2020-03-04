const express = require('express');
const graphqlHTTP = require('express-graphql')

const PORT = process.env.PORT || 4000

const app = express()
app.use('/graphql', graphqlHTTP({}));

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`)
})