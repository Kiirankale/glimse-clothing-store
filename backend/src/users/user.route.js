const express = require('express');
const router = express.Router();
const User = require('./user.module');
const generateToken = require('../middleware/generateToken');
const bcrypt = require('bcrypt');

// Register endpoint
router.post('/register', async (req, res) => {
  try {
    const { username, email, password ,} = req.body;

    if (!username || !email || !password) {
      return res.status(400).send({ message: 'Username, email, and password are required' });
    }

    
    const user = new User({ email, username, password });
    await user.save(); 

    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error.message);
    res.status(500).send({ message: 'Internal server error' });
  }
});


// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({ message: 'Email and password are required.' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
   

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).send({ message: 'Incorrect password' });
    }
   
    

    

    const token = generateToken(user._id);
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'None',
    });

    res.status(200).send({
      message: 'User logged in successfully.',
      token,
      user: { _id: user._id, username: user.username, profileImg: user.profileImg },
    });
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).send({ message: 'Internal server error' });
  }
});

//logout user
// Logout endpoint
router.post('/logout', (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
  });
  
  res.status(200).send({ message: 'User logged out successfully' });
});

// Delete user endpoint
router.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    res.status(200).send({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error.message);
    res.status(500).send({ message: 'Error deleting user' });
  }
});

// Fetch all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({}, 'id username profileImg').sort({ createdAt: -1 });
    res.status(200).send(users);
  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.status(500).send({ message: 'Error fetching users' });
  }
});

// Update user role
router.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;

    if (!role) {
      return res.status(400).send({ message: 'Role is required' });
    }

    const user = await User.findByIdAndUpdate(id, { role }, { new: true });
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    res.status(200).send({ message: 'User role updated successfully', user });
  } catch (error) {
    console.error('Error updating user role:', error.message);
    res.status(500).send({ message: 'Error updating user role' });
  }
});

// Edit profile endpoint
router.patch('/edit-profile', async (req, res) => {
  try {
    const { userId, username, profileImg, bio, profession } = req.body;

    if (!userId) {
      return res.status(400).send({ message: 'User ID is required' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    if (username) user.username = username;
    if (profileImg) user.profileImg = profileImg;
    if (bio) user.bio = bio;
    if (profession) user.profession = profession;

    await user.save();
    res.status(200).send({ message: 'User profile updated successfully', user });
  } catch (error) {
    console.error('Error updating profile:', error.message);
    res.status(500).send({ message: 'Error updating profile' });
  }
});

module.exports = router;
