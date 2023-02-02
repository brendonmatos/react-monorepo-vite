import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link to="about">About</Link>
      <Link to="dashboard">Dashboard</Link>
      <Link to="counter">Counter</Link>

    </div>
  );
}