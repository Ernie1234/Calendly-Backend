import { addUser } from "../controllers/UserController";
import express from "express";

const router = express.Router();

router.post("/user", addUser);

export default router;
