import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Dashboard from './pages/Dashboard';
import ScopeGenerator from './features/scope-generator/ScopeGenerator';
import WebsiteClone from './features/website-clone/WebsiteClone';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/scope-generator" element={<ScopeGenerator />} />
            <Route path="/website-clone" element={<WebsiteClone />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
