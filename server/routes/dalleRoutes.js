import express  from "express";
import * as dotenv from "dotenv";

import { Configuration,OpenAIApi } from "openai";

import PosT from "../mongodb/models/post.js";

dotenv.config();

const Router = express.Router();