import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  return (
    <nav className={`fixed bottom-0 w-full flex justify-around py-2 ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-top`}>
      <motion.button whileTap={{ scale: 0.95 }} onClick={() => navigate('/home')} className="text-pink-500">❤️ Home</motion.button>
      <motion.button whileTap={{ scale: 0.95 }} onClick={() => navigate('/discover')} className="text-pink-500">🔍 Discover</motion.button>
      <motion.button whileTap={{ scale: 0.95 }} onClick={() => navigate('/create')} className="text-pink-500">+</motion.button>
      <motion.button whileTap={{ scale: 0.95 }} onClick={() => navigate('/chats')} className="text-pink-500">💬 Chats</motion.button>
      <motion.button whileTap={{ scale: 0.95 }} onClick={() => navigate('/profile')} className="text-pink-500">👤 Profile</motion.button>
    </nav>
  );
};

export default Navbar;