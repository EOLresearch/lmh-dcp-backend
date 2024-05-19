// src/controllers/userController.js
exports.getUserData = (req, res) => {
  const { email } = req.params;

  // Mock user data
  const mockUserData = {
      email,
      name: "John Doe",
      role: "User"
  };

  res.status(200).json(mockUserData);
};
