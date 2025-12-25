export const formatText = (text: string): string => {
  // Add bold/italic formatting
  return text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
};