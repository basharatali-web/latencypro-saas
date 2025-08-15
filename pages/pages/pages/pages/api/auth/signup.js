import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/User";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  await dbConnect();
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) return res.status(400).json({ message: "Email already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashedPassword, plan: "Free" });
  await user.save();

  res.status(201).json({ message: "User created successfully" });
}
