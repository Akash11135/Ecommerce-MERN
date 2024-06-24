import User from "../modals/User.js";
import bcrypt from "bcryptjs";
const addUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.json({ msg: "User already registered. Go to login page." });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName: fullName,
      email: email,
      password: hashedPassword,
    });

    if (newUser) {
      await newUser.save();
      return res
        .status(200)
        .json({ fullName: newUser.fullName, email: newUser.email });
    }
  } catch (error) {
    res.json({ message: "Error in adding user.", error });
  }
};

const getAllUser = async (req, res) => {
  return res.json({ msg: "users" });
};

export { addUser, getAllUser };
