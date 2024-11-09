import { User } from "../models/User.model.js";
import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { v2 as cloudinary } from 'cloudinary';
import fileUpload from 'express-fileupload'; // Ensure this middleware is used in your Express app
import jwt from "jsonwebtoken"

async function uploading(file, folder) {
    const options = {
        folder,
    };

    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

const generateAccessToken = (userId) => {
    return jwt.sign({ _id: userId }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "7d" // Set to a reasonable expiration time (e.g., 7 days)
    });
};



const registerUser = asyncHandler(async (req, res) => {
    console.log("Register called");
    const { username, email, password } = req.body;
    const coverImg = req.files?.coverImg; // Assuming coverImg is sent as a file

    if (!username || !email || !password || !coverImg) {
        throw new ApiError(401, "All the fields are required");
    }

    let coverImgUploaded;
    try {
        coverImgUploaded = await uploading(coverImg, 'Users');
        console.log("Image uploaded successfully:", coverImgUploaded);
    } catch (error) {
        console.error("Error uploading image:", error);
        throw new ApiError(500, 'Failed to upload image');
    }

    let user;
    try {
        console.log("Creating user ......");
        user = await User.create({
            username,
            email,
            password,
            avatar: coverImgUploaded.secure_url // Ensure the correct URL is used
        });
        console.log("User created......");
    } catch (error) {
        console.error("An error occurred while creating the user:", error);
        if (error.code === 11000) { // Duplicate key error
            throw new ApiError(410, 'User already registered');
        } else {
            throw new ApiError(500, 'Internal server error');
        }
    }

    const createdUser = await User.findById(user._id);
    return res.status(200).json({ createdUser });
});


const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) throw new ApiError(401, "Invalid email");
    if (!await user.isPasswordCorrect(password)) throw new ApiError(401, "Invalid password");

    const accessToken = generateAccessToken(user._id);
    
    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Lax',
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    };

    res.status(200)
        .cookie("accessToken", accessToken, options)
        .json({ user: await User.findById(user._id).select("-password"),
            token:accessToken
         });
});


const getCurrentUser = asyncHandler(async (req, res) => {
    if (!req.user) throw new ApiError(401, "User not authenticated");
    res.status(200).json({ user: req.user });
});

const logoutUser = asyncHandler(async (req, res) => {
    res.clearCookie("accessToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Lax'
    });
    res.status(200).json({ message: "Logged out successfully" });
});


export { registerUser, loginUser, getCurrentUser,logoutUser };
