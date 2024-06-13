const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('db.json')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})