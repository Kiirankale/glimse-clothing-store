const express = require('express');
const router = express.Router();
const User = require('./user.module');
const generateToken = require('../middleware/generateToken');


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

// login user endpoint
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({ message: "Email and password are required." });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "User not found" })
    }
    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
      return res.status(401).send({ message: "Password not match" })
    }

    const token = generateToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: 'None',

    })
    res.status(200).send({
      message: "User logged in succesfully.", token, user: {
        _id: user._id,
        email: user.email,
        role: user.role,
        profileImg: user.profileImg,
        bio: user.bio,
        profession: user.profession
      }
    })



  } catch (error) {
    console.error('Login error:', error);
    res.status(500).send({ message: "Internal server error." });


  }

})

// logout user endpoint
router.post('/logout', (req, res) => {
  res.clearCookie('token')
  res.status(200).send({ message: "User logged out succesfully ." })
})

// user delete endpoint 
router.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id)
    if (!user) {
      return res.status(404).send({ message: "user not found" })

    }
    res.status(200).send({ message: "user deleted succesfully" })


  } catch (error) {
    console.log('Error deleting user', error);
    res.status(500).send({ message: "Error  deleting user." })


  }
})

// all users endpoint 
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({}, 'id email role').sort({ createdAt: -1 })
    res.status(200).send(users)

  } catch (error) {
    console.log('Error fetching user', error);
    res.status(500).send({ message: "Error fetching user." })
  }

})

// Update user role
router.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;
    const user = await User.findByIdAndUpdate(id, { role }, { new: true })
    if (!user) {
      return res.status(404).send({ message: "user not found." })
    }
    res.status(200).send({ message: "User role updated succesfully.", user })

  } catch (error) {
    console.log('Error updating user role .', error);
    res.status(500).send({ message: "Error updating  user role." })

  }

})

// Update or edit user profile

router.patch('/edit-profile', async (req, res) => {
  
  try {
    const { userId, username, profileImage, bio, profession } = req.body;
    if (!userId) {
      return res.status(400).send({ message: "User ID is required" })

    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).send({ message: "User not found." })

    }
    // Update Profile
    if (username !== undefined) User.username = username;
    if (profileImage !== undefined) User.profileImage = profileImage;
    if (bio !== undefined) User.bio = bio;
    if (profession !== undefined) User.profession = profession;

    await user.save();
    res.status(200).send({ message: "User profile updated successfully" ,user :{
      _id: user._id,
      email: user.email,
      role: user.role,
      profileImg: user.profileImg,
      bio: user.bio,
      profession: user.profession
  }})

  } catch (error) {
    console.log('Error updating user profile.', error);
    res.status(500).send({ message: "Error updating  user profile." })

  }

})








module.exports = router;