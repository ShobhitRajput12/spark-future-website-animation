import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // Database removed for now

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "School API is running" });
  });

  // Admissions Inquiry API
  app.post("/api/admissions/inquiry", async (req, res) => {
    try {
      const { parentName, email, phone, grade, message } = req.body;
      
      // DB connection removed, just log
      console.log("Logging inquiry:", req.body);

      // Mock Email Sending
      console.log(`Sending admission email to: ${email}`);
      
      res.status(201).json({ message: "Inquiry received successfully" });
    } catch (error) {
      console.error("Inquiry error:", error);
      res.status(500).json({ error: "Failed to process inquiry" });
    }
  });

  // Admin API (Protected in real app)
  app.get("/api/admin/inquiries", async (req, res) => {
    try {
      // Return mock data since DB is removed
      res.json([{ _id: "1", parentName: "Demo Parent", email: "demo@example.com", phone: "1234567890", grade: "Grade 5", status: "pending", createdAt: new Date() }]);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch inquiries" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
