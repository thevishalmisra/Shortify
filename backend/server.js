import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import urlRoutes from './routes/url.js';

dotenv.config();

const app = express();

// ✅ safer CORS
const corsOrigin = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.replace(/\/$/, "") // dynamically remove trailing slash if present
  : "*";

app.use(cors({
  origin: corsOrigin,
  methods: ["GET", "POST"],
}));

app.use(express.json());

app.use("/", urlRoutes);

// ✅ fix PORT fallback
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/shortify";

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

