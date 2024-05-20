// src/controllers/userController.js
exports.getUserData = (req, res) => {
  const { email } = req.params;

  // Mock user data
  const mockUserData = {
    id: "12345-abcde-67890-fghij",
    username: "johndoe",
    email: "johndoe@example.com",
    passwordHash: "hashedpassword123", // Never store plain text passwords
    firstName: "John",
    lastName: "Doe",
    role: "user", // or "admin"
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-10T00:00:00Z",
    lastLogin: "2023-01-09T12:34:56Z", 
    houseSelection: ''
  };

  res.status(200).json(mockUserData);
};
