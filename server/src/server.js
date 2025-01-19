import "./config/instrument.js";
import express from "express";
import cors from "cors";
import "dotenv/config";
import connection from "./config/DataConnection.js";
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from "./controller/Webhooks.js";
import companyRoutes from "./routes/Company.routes.js";
import connectCloudinary from "./config/cloudinary.js";
import jobRouter from "./routes/job.routes.js";
import userRoutes from "./routes/user.route.js";
import { clerkMiddleware } from "@clerk/express";

// Initialize Express
const app = express();

// Initialize Port
const PORT = process.env.PORT || 8000;
Sentry.setupExpressErrorHandler(app);

//Connections
connection();
connectCloudinary();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());
app.post("/webhooks", clerkWebhooks);
app.use("/api/company/", companyRoutes);
app.use("/api/jobs", jobRouter);
app.use("/api/users", userRoutes);

// app.get("/debug-sentry", function mainHandler(req, res) {
//     throw new Error("My first Sentry error!");
//   });

app.get("/", (req, res) => {
  res.send("API IS WORKING");
});

// Running Port
app.listen(PORT, () => {
  console.log("Server is running on:", PORT);
});
