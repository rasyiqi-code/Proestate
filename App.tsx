
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './auth/AuthContext';
import ProtectedRoute from './auth/ProtectedRoute';
import { SiteContentProvider } from './context/SiteContentContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <SiteContentProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </BrowserRouter>
      </SiteContentProvider>
    </AuthProvider>
  );
};

export default App;
