import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { z } from "zod";

mongoose.connect(
  "mongodb+srv://apfossdev:QQneHUwQNeZlJl8s@cluster0.wjfk9.mongodb.net/brainly"
);

const app = express();
app.use(express.json());

app.post("/api/v1/signup",(req, res) => {

})

app.post("/api/v1/signin", (req, res) => {});

app.post("/api/v1/content", (req, res) => {});

app.get("/api/v1/content", (req, res) => {});

app.delete("/api/v1/content", (req, res) => {});

app.post("/api/v1/brain/share", (req, res) => {});

app.get("/api/v1/brain/:shareLink", (req, res) => {});
