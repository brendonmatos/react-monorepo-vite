import { getBrazil, getHello } from 'utils'
export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      {getBrazil()}

      {getHello()}
    </div>
  );
}