const UserController = require("./userController");
const User = require("../../models/userModel");

const userController = new UserController(User);

module.exports = {
  createUser: userController.createUser,
  updateDataUser: userController.updateDataUser,
  deleteUser: userController.deleteUser,
  getDataUserById: userController.getDataUserById,
  getAllUsers: userController.getAllUsers,
};
