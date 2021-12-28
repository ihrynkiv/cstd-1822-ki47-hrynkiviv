const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const cors = require("cors");
const { Pool, Client } = require('pg')

const client = new Client({
  user: 'root',
  host: 'localhost',
  database: 'tictactoe',
  password: 'Admin1301',
  port: 3211,
})
client.connect()

const corsOptions ={
  origin:'*',
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

const app = express()
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions))
app.use("/",router);

router.post('/winner', (req, res) => {
  const winnerName = req.body.winnerName;
  const text = 'INSERT INTO game(winnerName) VALUES($1) RETURNING *'
  client.query(text, winnerName, (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log(res.rows[0])
    }
  })
});

app.listen(3013,() => {
  console.log("Started on PORT 3013");
})
