import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/User";

export default async function handler(req, res) {
  await dbConnect();

  // Simulating logged-in user for demo
  const email = "demo@example.com";
  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ message: "User not found" });

  res.status(200).json({ name: user.name, plan: user.plan });
}
