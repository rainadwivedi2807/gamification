import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-[#fdf4ff]">
        <Navbar />

        <div className="flex-1 ml-52 min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/insights" element={<PlaceholderPage title="Insights" />} />
            <Route path="/gamification" element={<PlaceholderPage title="Gamification" />} />
            <Route path="/applications" element={<PlaceholderPage title="Applications" />} />
            <Route path="/payments" element={<PlaceholderPage title="Payments" />} />
            <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <main className="p-8 flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mx-auto mb-4 text-3xl">
          🚧
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
        <p className="text-gray-400 text-sm">This page is coming soon.</p>
      </div>
    </main>
  );
}

export default App;
