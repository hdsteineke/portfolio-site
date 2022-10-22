
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Layout from './Page/Layout.jsx';
import Home from './Home/Home.jsx';
import PortfolioList from './Portfolio/PortfolioList.jsx';
import Trashapp from './Portfolio/Trashapp.jsx';
import About from './About/About.jsx';
import Resume from './Resume/Resume.jsx';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="portfolio" element={<PortfolioList />} />
            <Route path="portfolio/trashapp" element={<Trashapp/>} />
            <Route path="portfolio/magica" />
            <Route path="portfolio/giftwrapp" />
            <Route path="portfolio/alchemeetings" />
            <Route path="about" element={<About />} />
            <Route path="resume" element={<Resume />} />
            <Route index element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
