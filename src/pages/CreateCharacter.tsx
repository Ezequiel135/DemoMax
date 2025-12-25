import React, { useState } from 'react';
import { useCharacter } from '../hooks/useCharacter';
import { useAuth } from '../hooks/useAuth';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const CreateCharacter: React.FC = () => {
  const { addCharacter } = useCharacter();
  const { user } = useAuth();
  const [form, setForm] = useState<Omit<Character, 'id'>>({ name: '', intro: '', initialScene: '', tags: [], background: '', dialogExample: '', filtered: true, age: 18, creator: user?.username || '', model: 'Padrão', avatar: '' });

  const handleSubmit = async () => {
    try {
      await addCharacter(form);
    } catch (err) {
      alert((err as Error).message);
    }
  };

  return (
    <motion.div className="p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-2xl font-bold text-pink-500">Create Character</h1>
      <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="block w-full p-2 border mb-2" />
      <input type="number" placeholder="Age (18+)" value={form.age} onChange={e => setForm({ ...form, age: parseInt(e.target.value) })} className="block w-full p-2 border mb-2" />
      {/* Add other fields similarly */}
      <button onClick={handleSubmit} className="bg-pink-500 text-white px-4 py-2">Create</button>
      <Navbar />
    </motion.div>
  );
};

export default CreateCharacter;