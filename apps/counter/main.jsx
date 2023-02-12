export default function App() {

  // await new Promise((resolve) => setTimeout(resolve, 500))

  const [count, setCount] = useState(0)

  return <div>
    <h1>Hello from COUNTER</h1>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
  </div>
}