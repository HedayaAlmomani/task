const express = require("express");
const {
  createUser,
  updateDataUser,
  deleteUser,
  getDataUserById,
  getAllUsers,
} = require("../controllers/userController/");
const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.get("/", getAllUsers);
userRouter.get("/:userId", getDataUserById);
userRouter.delete("/", deleteUser);
userRouter.put("/", updateDataUser);

module.exports = userRouter;
