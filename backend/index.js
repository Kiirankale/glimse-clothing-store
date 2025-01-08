const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb', extended: true }));
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"], 
  allowedHeaders: ["Content-Type", "Authorization"], 
}));
app.use(cookieParser());


const port = process.env.PORT || 5000;

// Check for required environment variables
if (!process.env.DB_URL) {
  console.error("Error: DB_URL is not defined in the environment variables.");
  process.exit(1);
}

// Route for debugging
app.get('/api/test', (req, res) => {
  console.log("Cookies:", req.cookies); // 
  res.status(200).send({ message: "Test endpoint working fine." });
});

// All routes
const authRoutes = require('./src/users/user.route');
app.use('/api/auth', authRoutes);

async function main() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to MongoDB successfully");

    app.get('/', (req, res) => {
      res.send('Glimse is online now');
    });

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

main().catch(err => console.error("Unhandled error in main:", err));
