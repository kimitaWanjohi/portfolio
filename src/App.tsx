import {lazy, Suspense, useEffect} from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import Layout from './components/Layout/Layout';
import Loading from './components/Layout/Loading';


const Home: React.FC = lazy(() => import('./components/Home'));
const About: React.FC = lazy(() => import('./components/About'));
const Projects: React.FC = lazy(() => import('./components/Projects'));
const Blogs: React.FC = lazy(() => import('./components/Blogs'));


function App() {
  const pathname = useLocation().pathname;

  useEffect(() => {
    NProgress.configure({ showSpinner: false });
    NProgress.start();
    NProgress.done();
  }, [pathname]);

  return (
    <Suspense fallback={<Loading />}>
      <div className='background'>
        <div className='background__overlay'>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blogs" element={<Blogs />} />
            </Routes>
          </Layout>
        </div>  
      </div>
    </Suspense>
  )
}

export default App
