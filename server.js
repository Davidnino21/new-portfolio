require("dotenv").config();
const express = require("express");
const nodeMailer = require("nodemailer");
const path = require ("path")

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

const { MAIL_SERVICE, MAIL_USER, MAIL_PASS } = process.env;
const transporter = nodeMailer.createTransport({
  service: MAIL_SERVICE,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS,
  },
});

app.post("/api/send-message", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const mailOptions = {
      from: `"New Message from Portfolio" <${MAIL_USER}>`,
      to: MAIL_USER,
      subject: "New Message from Portfolio",
      text: `Name: ${name}, Email: ${email}, Message: ${message}`,
      html: `<h1>New message from ${name}</h1> <h3>Email: ${email}</h3> <p>${message}</p>`,
    };
    const result = await transporter.sendMail(mailOptions);
    console.log(result.messageId);
    res.json({ message: "Message Sent!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send message" });
  }
});

app.use(express.static(path.join(__dirname,"client", "dist")))
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname,"client", "dist", "index.html"))
})

app.listen(PORT, () => console.log("Now listening"));
