import mongoose from "mongoose";

const InquirySchema = new mongoose.Schema({
  parentName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  grade: { type: String, required: true },
  message: { type: String },
  status: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now }
});

export const Inquiry = mongoose.model("Inquiry", InquirySchema);
