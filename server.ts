import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";

function escapeHtml(str: string): string {
  return String(str).replace(/[&<>"']/g, (s) => 
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[s] || s)
  );
}

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // API Route: Handle direct quote submissions (dispatches email notification)
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, phone, service, details } = req.body;

      if (!name || !phone) {
        return res.status(400).json({ error: "Name and phone number are required." });
      }

      const recipient = process.env.NOTIFICATION_EMAIL || "sicleaningsimone@gmail.com";
      let emailSent = false;
      const timestamp = new Date().toISOString();

      // Escape user inputs to prevent HTML injection in emails
      const safeName = escapeHtml(name);
      const safePhone = escapeHtml(phone);
      const safeService = escapeHtml(service || "General Inquiry");
      const safeDetails = escapeHtml(details || "None provided");

      // Attempt to send via Nodemailer if SMTP credentials are provided
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        try {
          const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp.gmail.com",
            port: Number(process.env.SMTP_PORT) || 587,
            secure: Number(process.env.SMTP_PORT) === 465,
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS,
            },
          });

          await transporter.sendMail({
            from: `"Si Cleaning Website" <${process.env.SMTP_USER}>`,
            to: recipient,
            subject: `New Cleaning Quote Request from ${safeName}`,
            html: `
              <div style="font-family: sans-serif; padding: 20px; max-width: 600px; border: 1px solid #14b8a6; border-radius: 12px;">
                <h2 style="color: #0d9488; margin-top: 0;">New Quote Request for Si Cleaning Services</h2>
                <p><strong>Name:</strong> ${safeName}</p>
                <p><strong>Phone:</strong> <a href="tel:${safePhone}">${safePhone}</a></p>
                <p><strong>Service Requested:</strong> ${safeService}</p>
                <p><strong>Details:</strong> ${safeDetails}</p>
                <p style="color: #64748b; font-size: 12px; margin-top: 20px;">Submitted at ${timestamp}</p>
              </div>
            `,
          });
          emailSent = true;
          console.log(`[Email Sent] Direct notification delivered to ${recipient}`);
        } catch (err) {
          console.error("[SMTP Error] Could not send direct email:", err);
        }
      } else {
        console.log(`[Inquiry Received] Simone notification email target: ${recipient}`);
      }

      return res.json({
        success: true,
        emailSent,
        recipient,
        message: emailSent
          ? `Notification email sent directly to ${recipient}!`
          : `Request processed. Simone will reach out shortly.`,
      });
    } catch (error) {
      console.error("Error processing contact submission:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
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
