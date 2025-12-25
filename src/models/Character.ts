export interface Character {
  id: string;
  name: string;
  intro: string;
  initialScene: string;
  tags: string[];
  background: string;
  dialogExample: string;
  filtered: boolean; // SFW true, NSFW false
  age: number;
  creator: string;
  model: 'Padrão' | 'Rápido' | 'Profundo' | 'Safado';
  avatar: string;
}