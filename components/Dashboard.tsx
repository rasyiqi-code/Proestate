import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { auth } from '../firebase';

const Dashboard: React.FC = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      console.error("Failed to log out", error);
      alert("Failed to log out.");
    }
  };

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="bg-white p-10 rounded-2xl border border-gray-200/80 shadow-lg text-center">
        <h2 className="text-3xl font-bold text-pro-dark-blue mb-4">Welcome to Your Dashboard</h2>
        <p className="text-lg text-gray-600 mb-6">
          You are logged in as: <strong>{currentUser?.email}</strong>
        </p>
        <button
          onClick={handleLogout}
          className="bg-pro-yellow text-pro-dark-blue font-semibold py-3 px-8 rounded-lg hover:brightness-110 transition-colors duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;