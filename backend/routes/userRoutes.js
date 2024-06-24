import express from "express";
import { addUser, getAllUser } from "../controllers/userController.js";
const router = express.Router();

router.route("/newuser").get(getAllUser).post(addUser);

export default router;
