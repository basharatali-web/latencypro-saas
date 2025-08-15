import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("/api/user/dashboard");
        setData(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>
      {data ? (
        <div>
          <p>Welcome, {data.name}!</p>
          <p>Your plan: {data.plan}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
