import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { UserModel } from "./db";
import dotenv from "dotenv";
//hash the password using bcrypt here by seeing previous files

dotenv.config();

mongoose.connect(process.env.MONGODB_URI as string);

const app = express();
app.use(express.json());

const signupSchema = z.object({
  username: z.string().min(3).max(10),
  password: z
    .string()
    .min(8)
    .max(20)
    .regex(/(?=.*[a-z])/, "Must contain at least one lowercase letter")
    .regex(/(?=.*[A-Z])/, "Must contain at least one uppercase letter")
    .regex(/(?=.*\d)/, "Must contain at least one number")
    .regex(/(?=.*[@$!%*?&])/, "Must contain at least one special character")
});

app.post("/api/v1/signup", async (req, res) => {
  try {
    const { username, password } = signupSchema.parse(req.body);

    const existingUser = await UserModel.findOne({ username });
    if(existingUser) {
      return res.status(403).json({
        message: "User already exists with this username"
      });
    }

    await UserModel.create({ username, password });

  }

  catch (error) {
    if( error instanceof z.ZodError) {
      return res.status(411).json({message : "Error in inputs", errors: error.errors});
    }
    res.status(500).json({message: "Server error"});
  }
});

app.post("/api/v1/signin", (req, res) => {});

app.post("/api/v1/content", (req, res) => {});

app.get("/api/v1/content", (req, res) => {});

app.delete("/api/v1/content", (req, res) => {});

app.post("/api/v1/brain/share", (req, res) => {});

app.get("/api/v1/brain/:shareLink", (req, res) => {});
