const jwt = require("jsonwebtoken");
const User = require("../users/user.module");

const JWT_SECRET = process.env.JWT_SECRET_KEY;

const generateToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found.");
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: "1h",
    });
     console.log("Generated JWT Token:", token);
    return token;
  } catch (error) {
  console.error("Error generating token:", error);
  throw new Error("Failed to generate token");
}
};


module.exports = generateToken;