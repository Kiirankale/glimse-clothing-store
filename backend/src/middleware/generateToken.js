const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY; // Make sure the secret key is correctly loaded from env

// Generate token using userId directly
const generateToken = (userId) => {
    try {
        // Generate the JWT token
        const token = jwt.sign(
            { userId }, // Payload: userId (you can also add more data if needed)
            secretKey,  // Secret key for signing the JWT
            { expiresIn: '1h' } // Token expiration time
        );

        console.log("Generated Token:", token);
        return token; // Return the generated token

    } catch (error) {
        console.error("Error generating token:", error); // Log error for debugging
        throw error;
    }
};

module.exports = generateToken;
