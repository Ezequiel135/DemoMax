import React from 'react';
import ThemeToggle from '../components/ThemeToggle';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const Settings: React.FC = () => {
  return (
    <motion.div className="p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-2xl font-bold text-pink-500">Settings</h1>
      <ThemeToggle />
      {/* Add other settings like NSFW toggle, etc. */}
      <Navbar />
    </motion.div>
  );
};

export default Settings;