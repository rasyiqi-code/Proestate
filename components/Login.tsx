import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await auth.signInWithEmailAndPassword(email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to log in');
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto px-6 py-20 flex justify-center items-center">
      <div className="w-full max-w-md bg-white p-8 rounded-xl border border-gray-200/80 shadow-lg">
        <h2 className="text-3xl font-bold text-pro-dark-blue text-center mb-6">Login to Your Account</h2>
        {error && <p className="bg-red-100 text-red-700 p-3 rounded-md mb-4 text-center">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pro-blue focus:border-pro-blue"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pro-blue focus:border-pro-blue"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pro-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors duration-300 disabled:bg-pro-blue/50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;