import Link from "next/link";

export default function Pricing() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Pricing Plans</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <h3>Free</h3>
          <p>$0/month</p>
          <Link href="/signup">Get Started</Link>
        </div>
        <div>
          <h3>Pro</h3>
          <p>$10/month</p>
          <Link href="/signup">Get Started</Link>
        </div>
      </div>
    </div>
  );
}
