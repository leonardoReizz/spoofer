import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import LayoutWithSidebar from './LayoutWithSidebar';
import Checker from '../pages/Checker';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<LayoutWithSidebar />}>
          <Route path="/" element={<Home />} />
          <Route path="/checker" element={<Checker />} />
        </Route>
      </Routes>
    </Router>
  );
}
