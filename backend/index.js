const express = require('express')
const mongoose = require('mongoose');
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
app.use(express.json({ limit: '25mb' }))
app.use(cors({
  origin: "http://localhost:5173/",
  credentials: true
}));
app.use(express.urlencoded({limit: '25mb'}))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
require('dotenv').config()
const port = process.env.PORT || 5000

console.log(process.env.DB_URL);



main().catch(err => console.log(err));

//IisEOxvwITnq2Br0
//admin

async function main() {
  await mongoose.connect(process.env.DB_URL);

  app.get('/', (req, res) => {
    res.send('Glimse is online now')
  })

}



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})