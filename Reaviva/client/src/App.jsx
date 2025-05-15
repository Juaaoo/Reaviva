import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Login';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Bible from './pages/Bible';
import Plans from './pages/Plans';
import Verse from './pages/Verse';
import ThemeToggle from './components/ThemeToggle';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <Router>
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/biblia" element={<Bible />} />
          <Route path="/planos" element={<Plans />} />
          <Route path="/versiculo-do-dia" element={<Verse />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
