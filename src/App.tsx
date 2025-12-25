import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { CharacterProvider } from './contexts/CharacterContext';
import Onboarding from './pages/Onboarding';
import Login from './pages/Login';
import Home from './pages/Home';
import Chat from './pages/Chat';
import CreateCharacter from './pages/CreateCharacter';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <CharacterProvider>
          <Router>
            <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
              <Routes>
                <Route path="/" element={<Onboarding />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/chat/:id" element={<Chat characterId="placeholder" />} />
                <Route path="/create" element={<CreateCharacter />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </Router>
        </CharacterProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;