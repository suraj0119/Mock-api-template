// const express = require('express')
// const app = express()
// const port = process.env.PORT || 4000;

// app.get('/', (req, res) => {
//   res.send("")
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading data');
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
