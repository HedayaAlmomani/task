class UserController {
  constructor(userModel, cardModel) {
    this.userModel = userModel;
    this.cardModel = cardModel;
  }

  createUser = async (req, res) => {
    try {
      const { name, email } = req.body;

      const card = await this.cardModel.create();
      const cardId = card.cardId;
      const newUser = await this.userModel.create({ name, email, cardId });

      res.status(201).json(newUser);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Unable to create user" });
    }
  };

  updateDataUser = async (req, res) => {
    const { userId } = req.params;
    const { name, email, cardId } = req.body;

    try {
      const user = await this.userModel.findByPk(userId);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      user.name = name;
      user.email = email;
      user.cardId = cardId;

      await user.save();
      res.status(200).json(user);
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ error: "Unable to update user" });
    }
  };

  deleteUser = async (req, res) => {
    const { userId } = req.params;

    try {
      const user = await this.userModel.findByPk(userId);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      await user.destroy();
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json({ error: "Unable to delete user" });
    }
  };

  getDataUserById = async (req, res) => {
    const { userId } = req.params;

    try {
      const user = await this.userModel.findByPk(userId);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      res.status(200).json(user);
    } catch (error) {
      console.error("Error retrieving user data:", error);
      res.status(500).json({ error: "Unable to retrieve user data" });
    }
  };

  getAllUsers = async (req, res) => {
    try {
      const users = await this.userModel.findAll();
      res.status(200).json(users);
    } catch (error) {
      console.error("Error retrieving users:", error);
      res.status(500).json({ error: "Unable to retrieve users" });
    }
  };
}

module.exports = UserController;
