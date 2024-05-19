const AWS = require('aws-sdk');

// Mock AWS Cognito client
const cognito = new AWS.CognitoIdentityServiceProvider({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

exports.login = (req, res) => {
    const { email, password } = req.body;

    // Mock authentication logic
    if (email === 'fakeuser@example.com' && password === 'testpassword') {
        const mockCognitoResponse = {
            AuthenticationResult: {
                IdToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZXhwIjoxNjE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
            }
        };
        return res.status(200).json(mockCognitoResponse);
    } else {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
};
