import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Sidebar />
        
        <div className="flex-1 ml-[200px]">
          <Navbar />
          
          <main className="pt-16 min-h-screen">
            <Routes>
              <Route path="/" element={<Navigate to="/gamification" replace />} />
              <Route path="/gamification" element={<HomePage />} />
              <Route path="*" element={<Navigate to="/gamification" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;