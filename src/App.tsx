import {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Loading from './components/Layout/Loading';


const Home: React.FC = lazy(() => import('./components/Home'));
const About: React.FC = lazy(() => import('./components/About'));
const Projects: React.FC = lazy(() => import('./components/Projects'));

function App() {

  return (
    <div className='background'>
      <div className='background__overlay'>
      <Router>
        <Layout>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
      </div>
    </div>
  )
}

export default App
