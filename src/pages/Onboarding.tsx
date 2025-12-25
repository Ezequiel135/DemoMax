import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Onboarding: React.FC = () => {
  const navigate = useNavigate();
  return (
    <motion.div className="p-4 flex flex-col items-center justify-center h-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-4xl font-bold text-pink-500 mb-4">Welcome to デモ𝖒𝖆𝖝!</h1>
      <p>Swipe through tutorial slides...</p>
      {/* Implement swipeable slides */}
      <button onClick={() => navigate('/home')} className="bg-pink-500 text-white px-6 py-3 rounded mt-8">Start</button>
    </motion.div>
  );
};

export default Onboarding;