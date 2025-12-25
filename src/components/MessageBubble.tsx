import React from 'react';
import { Message } from '../models/Message';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const { isDark } = useTheme();
  const isUser = message.sender === 'user';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`max-w-xs p-3 rounded-lg mb-2 ${isUser ? 'bg-pink-400 text-white self-end' : 'bg-gray-200 text-gray-900 self-start'} ${isDark && !isUser ? 'bg-gray-700 text-white' : ''}`}
    >
      {message.text}
    </motion.div>
  );
};

export default MessageBubble;