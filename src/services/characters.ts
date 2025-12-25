import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { Character } from '../models/Character';
import { app } from './auth'; // Assuming app is exported from auth.ts

const db = getFirestore(app);

export const getCharacters = async (): Promise<Character[]> => {
  const snapshot = await getDocs(collection(db, 'characters'));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Character));
};

export const createCharacter = async (char: Omit<Character, 'id'>): Promise<Character> => {
  const docRef = await addDoc(collection(db, 'characters'), char);
  return { id: docRef.id, ...char };
};