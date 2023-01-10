import {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Loading from './components/Layout/Loading';


const Home: React.FC = lazy(() => import('./components/Home'));
const About: React.FC = lazy(() => import('./components/About'));
const Projects: React.FC = lazy(() => import('./components/Projects'));

//TODO add nprogress loader

function App() {

  return (
  <Router>
    <Suspense fallback={<Loading />}>
      <div className='background'>
        <div className='background__overlay'>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </Layout>
        </div>  
      </div>
    </Suspense>
  </Router>
  )
}

export default App
