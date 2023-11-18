import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//Register || METHOD POST
router.post("/register", registerController);

//LOGIN
router.post("/login", loginController);

//test route
router.get("/test", requireSignIn, isAdmin, testController);

//protected route
router.get("/user-auth", requireSignIn, (req, res) => {
  console.log("authroute", req);
  res.status(200).send({ ok: true });
});
export default router;
