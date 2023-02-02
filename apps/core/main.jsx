import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

const Counter = React.lazy(() => import('counter'))
const Dashboard = React.lazy(() => import('dashboard'))
const About = React.lazy(() => import('about'))
const Home = React.lazy(() => import('home'))


const App = () => {
  return <Routes>
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="counter" element={<Counter />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </React.StrictMode>,
)

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}