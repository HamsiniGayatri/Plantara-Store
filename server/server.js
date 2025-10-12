require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const Razorpay = require("razorpay");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
const razorpay = new Razorpay({
key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// MongoDB Connection (Local or Atlas)
mongoose
  .connect("mongodb://127.0.0.1:27017/goverdana", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ Mongo Error:", err));

// Routes
app.use("/api/auth", authRoutes);

// Route to create an order
app.post("/api/payment/orders", async (req, res) => {
  try {
    const options = {
      amount: req.body.amount * 100,  // amount in paise
      currency: "INR",
      receipt: `receipt_order_${Math.random()}`,
    };
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating Razorpay order");
  }
});



// Start Server
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});

