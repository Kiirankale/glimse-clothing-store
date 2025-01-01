const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb', extended: true })); // Use extended here directly
app.use(cors({
  origin: "http://localhost:5173/",
  credentials: true
}));
app.use(cookieParser());

const port = process.env.PORT || 5000;

console.log(process.env.DB_URL);

main().catch(err => console.log(err));

// all routes

const authRoutes = require('./src/users/user.route');
app.use('/api/auth', authRoutes)



async function main() {
  await mongoose.connect(process.env.DB_URL);

  app.get('/', (req, res) => {
    res.send('Glimse is online now');
  });
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
