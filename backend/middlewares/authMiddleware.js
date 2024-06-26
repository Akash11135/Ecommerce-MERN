import jwt from "jsonwebtoken";
const authMiddleware = (req, res, next) => {
  const token = req.cookies["login-token"];
  if (!token) {
    return res.json({ mes: "no token in browser." });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) throw new Error("error in token verification");
    req.user = user;
  });
  next();
};

export default authMiddleware;
