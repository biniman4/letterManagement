import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import NewLetter from './components/pages/NewLetter';
import Inbox from './components/pages/Inbox';
import Archive from './components/pages/Archive';
import Notifications from './components/pages/Notifications';
import Users from './components/pages/Users';
import Settings from './components/pages/Settings';

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    return isAuthenticated ? (
      <div className="flex w-full min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 overflow-hidden">
          <Header />
          <main
            className="p-6 overflow-auto"
            style={{ height: 'calc(100vh - 64px)' }}
          >
            {children}
          </main>
        </div>
      </div>
    ) : (
      <Navigate to="/" replace />
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home onLogin={() => setIsAuthenticated(true)} />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/new-letter" element={<PrivateRoute><NewLetter /></PrivateRoute>} />
        <Route path="/inbox" element={<PrivateRoute><Inbox /></PrivateRoute>} />
        <Route path="/archive" element={<PrivateRoute><Archive /></PrivateRoute>} />
        <Route path="/notifications" element={<PrivateRoute><Notifications /></PrivateRoute>} />
        <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
        <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}
