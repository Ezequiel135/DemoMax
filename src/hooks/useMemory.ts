import { useState } from 'react';
import { summarizeMemory } from '../services/memory';

export const useMemory = (characterId: string) => {
  const [messages, setMessages] = useState<string[]>([]); // Last 350 messages

  const addMessage = async (msg: string) => {
    const newMessages = [...messages, msg];
    if (newMessages.length > 350) {
      const summary = await summarizeMemory(newMessages.slice(0, 50)); // Summarize first 50
      setMessages([summary, ...newMessages.slice(50)]);
    } else {
      setMessages(newMessages);
    }
  };

  const resetMemory = () => setMessages([]);

  return { messages, addMessage, resetMemory };
};