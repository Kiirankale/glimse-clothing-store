const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb', extended: true }));
app.use(cors({
  origin: "https://glimse-e-commerce.vercel.app", 
  credentials: true,
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


// image upload 
const uploadImage = require("./src/utils/uploadImage")

// All routes
const authRoutes = require('./src/users/user.route');
const productRoutes = require('./src/products/products.route');
const reviewRoutes = require('./src/reviews/reviews.router');
const orderRoutes = require ('./src/orders/orders.route');
const statsRoutes = require('./src/stats/stats.route')



app.use('/api/auth', authRoutes);
app.use('/api/products',productRoutes);
app.use('/api/reviews',reviewRoutes);
app.use('/api/orders',orderRoutes);
app.use('/api/stats',statsRoutes)


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



app.post("/uploadImage", (req, res) => {
  uploadImage(req.body.image)
    .then((url) => res.send(url))
    .catch((err) => res.status(500).send(err));
});

main().catch(err => console.error("Unhandled error in main:", err));
