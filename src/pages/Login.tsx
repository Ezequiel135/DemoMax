import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState('');
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      if (isSignup) {
        await signup(email, password, username);
      } else {
        await login(email, password);
      }
      navigate('/home');
    } catch (err) {
      alert('Error: ' + (err as Error).message);
    }
  };

  return (
    <motion.div className="p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-2xl font-bold text-pink-500">Login / Signup</h1>
      {isSignup && <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} className="block w-full p-2 border mb-2" />}
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="block w-full p-2 border mb-2" />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="block w-full p-2 border mb-2" />
      <button onClick={handleSubmit} className="bg-pink-500 text-white px-4 py-2">{isSignup ? 'Signup' : 'Login'}</button>
      <button onClick={() => setIsSignup(!isSignup)} className="text-pink-500 ml-2">Switch to {isSignup ? 'Login' : 'Signup'}</button>
    </motion.div>
  );
};

export default Login;