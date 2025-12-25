import React, { useState } from 'react';
import MessageBubble from '../components/MessageBubble';
import { useMemory } from '../hooks/useMemory';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
// Placeholder for AI response generation
async function generateResponse(prompt: string, model: string) {
  // Integrate with OpenAI or Grok API
  return 'AI response here';
}

const Chat: React.FC<{ characterId: string }> = ({ characterId }) => {
  const [input, setInput] = useState('');
  const { messages, addMessage } = useMemory(characterId);

  const sendMessage = async () => {
    if (!input) return;
    addMessage(input);
    const response = await generateResponse(input, 'Padrão'); // Use character model
    addMessage(response);
    setInput('');
  };

  return (
    <motion.div className="flex flex-col h-screen p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex-1 overflow-y-auto flex flex-col">
        {messages.map((msg, i) => <MessageBubble key={i} message={{ id: `${i}`, text: msg, sender: i % 2 === 0 ? 'user' : 'character', timestamp: new Date() }} />)}
      </div>
      <div className="flex">
        <input value={input} onChange={e => setInput(e.target.value)} className="flex-1 p-2 border rounded" />
        <button onClick={sendMessage} className="bg-pink-500 text-white px-4">Send</button>
      </div>
      <Navbar />
    </motion.div>
  );
};

export default Chat;