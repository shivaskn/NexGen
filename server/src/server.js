import "./config/instrument.js";
import express from "express";
import cors from "cors";
import "dotenv/config";
import connection from "./config/DataConnection.js";
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from "./controller/Webhooks.js";

// Initialize Express
const app = express();

// Initialize Port
const PORT = process.env.PORT || 8000;
Sentry.setupExpressErrorHandler(app);

// Middlewares
connection();
app.use(cors());
app.use(express.json());


// app.get("/debug-sentry", function mainHandler(req, res) {
//     throw new Error("My first Sentry error!");
//   });

// Running Port
app.listen(PORT, () => {
  console.log("Server is running on:", PORT);
});

app.post('/webhooks',clerkWebhooks)