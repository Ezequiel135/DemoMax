import React from 'react';
import { useAuth } from '../hooks/useAuth';
import ThemeToggle from '../components/ThemeToggle';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const Profile: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <motion.div className="p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-2xl font-bold text-pink-500">Profile</h1>
      <p>Username: {user?.username}</p>
      <ThemeToggle />
      <button onClick={logout} className="bg-red-500 text-white px-4 py-2 mt-4">Logout</button>
      <Navbar />
    </motion.div>
  );
};

export default Profile;