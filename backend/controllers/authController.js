import bcrypt from "bcryptjs";
import User from "../modals/User.js";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.send({
        msg: "User already registered. Go to login page.",
        statusCode: 400,
      });
    }

    const validatePassword = (password) => {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return passwordRegex.test(password);
    };

    if (!validatePassword(password)) {
      return res.status(200).json({
        msg: "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.",
        statusCode: 400,
      });
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
        .send({ msg: "user successfully registered.", statusCode: 200 });
    }
  } catch (error) {
    res.json({ message: "Error in adding user.", error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res
        .status(200)
        .send({ msg: "invalid credentials.User not found.", statusCode: 404 });
    }

    if (user) {
      const userPassword = user.password;
      const isCorrect = await bcrypt.compare(password, userPassword);

      if (!isCorrect) {
        return res.send({ msg: "Invalid password.", statusCode: 404 });
      }

      const payload = {
        userId: user._id,
        fullName: user.fullName,
        isAdmin: user.isAdmin,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      if (token) {
        res.cookie("login-token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "None",
        });
      }

      return res.status(200).send({
        msg: "successfully logged in.",
        statusCode: 200,
        payload: payload,
      });
    }
  } catch (error) {
    console.log("error:", error);
    res.json({ mess: "error in login from backend." });
  }
};

const logout = async (req, res) => {
  const token = req.cookies["login-token"];
  if (!token) {
    return res.json({ msg: "no token, first login." });
  }
  res.clearCookie("login-token");
  res.json({ msg: "logged out successfully" });
};

export { register, login, logout };
