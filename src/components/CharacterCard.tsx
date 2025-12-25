import React from 'react';
import { Character } from '../models/Character';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

interface CharacterCardProps {
  character: Character;
  onChat: () => void;
  onFavorite: () => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, onChat, onFavorite }) => {
  const { isDark } = useTheme();
  return (
    <motion.div
      className={`rounded-lg shadow-md p-4 ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <img src={character.avatar} alt={character.name} className="w-full h-32 object-cover rounded-md" />
      <h3 className="font-bold text-pink-500">{character.name}</h3>
      <p>By @{character.creator}</p>
      <div className="flex justify-between mt-2">
        <button onClick={onChat} className="bg-pink-400 text-white px-4 py-2 rounded">Chat Now</button>
        <button onClick={onFavorite} className="text-pink-500">❤️</button>
      </div>
      <div className="flex flex-wrap mt-1">
        {character.tags.map(tag => <span key={tag} className="bg-pink-200 text-pink-800 text-xs px-2 py-1 rounded mr-1">{tag}</span>)}
      </div>
    </motion.div>
  );
};

export default CharacterCard;