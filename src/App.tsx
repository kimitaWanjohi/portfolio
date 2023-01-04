import {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';

const Home: React.FC = lazy(() => import('./components/Home'));
const About: React.FC = lazy(() => import('./components/About'));

function App() {

  return (
    <>
      <Router>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </>
  )
}

export default App
