import React, { createContext, useState, ReactNode } from 'react';
import { Character } from '../models/Character';
import { createCharacter, getCharacters } from '../services/characters';

interface CharacterContextType {
  characters: Character[];
  fetchCharacters: () => Promise<void>;
  addCharacter: (char: Omit<Character, 'id'>) => Promise<void>;
}

export const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

export const CharacterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const fetchCharacters = async () => {
    const chars = await getCharacters();
    setCharacters(chars);
  };

  const addCharacter = async (char: Omit<Character, 'id'>) => {
    // Placeholder for prohibition scan
    if (!scanForProhibitions(char)) {
      throw new Error('Content violates rules');
    }
    const newChar = await createCharacter(char);
    setCharacters([...characters, newChar]);
  };

  return (
    <CharacterContext.Provider value={{ characters, fetchCharacters, addCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};

// Placeholder scan function
function scanForProhibitions(char: Omit<Character, 'id'>): boolean {
  // Detect suicide keywords, real people, age <18, etc.
  if (char.age < 18 || /suicídio|se matar/i.test(char.background)) {
    return false;
  }
  // Use AI moderation (e.g., integrate with OpenAI moderation API)
  return true;
}