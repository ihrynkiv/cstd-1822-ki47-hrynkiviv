const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const cors = require("cors");
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

const loadData = () => {
  try {
    return JSON.parse(fs.readFileSync('./data.json').toString());
  } catch (e) {
    return {};
  }
};

router.post('/winner', (req, res) => {
  const winnerName = req.body.winnerName;
  const data = loadData()
  data[winnerName] = (data[winnerName] || 0) + 1

  const dataJSON = JSON.stringify(data);
  fs.writeFileSync('./data.json', dataJSON);
});

app.listen(3013,() => {
  console.log("Started on PORT 3013");
})
