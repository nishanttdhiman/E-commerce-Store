import User from "../models/user.model.js";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(200).json({
        message: "User already exists",
      });
    }

    const user = await User.create({ name, email, password });

    return res.status(201).json({
      message: "User created Successfully",
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  res.send("login called");
};

export const logout = async (req, res) => {
  res.send("logout called");
};
