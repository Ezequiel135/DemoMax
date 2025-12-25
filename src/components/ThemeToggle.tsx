import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <motion.button
      onClick={toggleTheme}
      className="bg-pink-400 text-white px-4 py-2 rounded"
      whileTap={{ scale: 0.95 }}
    >
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </motion.button>
  );
};

export default ThemeToggle;