const express = require('express');
const router = express.Router();
const User = require('./user.module')

// register endpoint
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ email, username, password })
    await user.save();

    res.status(201).send({ message: "user registered succesfully" })



  } catch (error) {
    console.error(error); // Log error to see what went wrong
    res.status(500).send({ message: "Internal server error" });

  }
})

// login endpoint
router.post('/login', async () => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).send({ message: "User not found" })
  }
  const isMatch = await user.comparePassword(password)
  if (!isMatch) {
    return res.status(401).send({ message: "Password not match" })
  }
})




module.exports = router;