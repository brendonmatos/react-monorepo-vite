
import { NoMatch } from './NoMatch';
export const Loader = () => <div>Loading...</div>
export const Header = lazy(() => import('header'))
export const Counter = lazy(() => import('counter'))
export const Dashboard = lazy(() => import('dashboard'))
export const About = lazy(() => import('about'))
export const Home = lazy(() => import('home'))

export const ConfiguredRoutes = () => (<Routes>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="dashboard" element={<Dashboard />} />
  <Route path="counter" element={<Counter />} />
  <Route path="*" element={<NoMatch />} />
</Routes>)

export const routes = [
  '/',
  '/about',
  '/dashboard',
  '/counter',
];

export const App = () => {
  return <div>
    <Header></Header>
    <Suspense fallback={<Loader />}>
      <ConfiguredRoutes />
    </Suspense>
  </div>
};
