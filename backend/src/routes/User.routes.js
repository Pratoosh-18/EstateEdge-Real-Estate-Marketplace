import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { loginUser,registerUser,getCurrentUser, logoutUser } from "../controllers/User.controller.js";

const userRoutes = Router()

userRoutes.route("/register").post(
    registerUser
)
userRoutes.route("/login").post(
    loginUser
)
userRoutes.route("/currentUser").post(
    verifyJWT, getCurrentUser
)
userRoutes.route("/logout").post(
    logoutUser
)

export default userRoutes