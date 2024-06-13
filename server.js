// const express = require('express')
// const app = express()
// const port = process.env.PORT || 4000;

// app.get('/', (req, res) => {
//   res.send("")
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// const express = require('express');
// const fs = require('fs');
// const cors = require('cors'); // Import the cors middleware
// const app = express();
// const port = process.env.PORT || 4000;

// // Use the cors middleware
// app.use(cors());

// app.get('/', (req, res) => {
//   fs.readFile('db.json', 'utf8', (err, data) => {
//     if (err) {
//       res.status(500).send('Error reading data');
//     } else {
//       res.send(data);
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });


const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

// Get all songs
app.get('/songs', (req, res) => {
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading data');
    } else {
      const db = JSON.parse(data);
      res.json(db.songs);
    }
  });
});

// Get all users
app.get('/users', (req, res) => {
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading data');
    } else {
      const db = JSON.parse(data);
      res.json(db.users);
    }
  });
});

// Add a new user
app.post('/users', (req, res) => {
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading data');
    } else {
      const db = JSON.parse(data);
      const newUser = req.body;
      newUser.id = db.users.length ? db.users[db.users.length - 1].id + 1 : 1;
      db.users.push(newUser);

      fs.writeFile('db.json', JSON.stringify(db, null, 2), (err) => {
        if (err) {
          res.status(500).send('Error writing data');
        } else {
          res.status(201).json(newUser);
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
