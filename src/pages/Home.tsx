import React, { useEffect } from 'react';
import CharacterCard from '../components/CharacterCard';
import { useCharacter } from '../hooks/useCharacter';
import { useAuth } from '../hooks/useAuth';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  const { characters, fetchCharacters } = useCharacter();
  const { guestMode } = useAuth();

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4">
      <h1 className="text-2xl font-bold text-pink-500 mb-4">Recomendados para você</h1>
      <div className="grid grid-cols-2 gap-4">
        {characters.map(char => (
          <CharacterCard key={char.id} character={char} onChat={() => {}} onFavorite={() => {}} />
        ))}
      </div>
      {guestMode && <p className="text-pink-500">Login to save favorites!</p>}
      <Navbar />
    </motion.div>
  );
};

export default Home;