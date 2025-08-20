import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface VerseData {
  id: string;
  arabic: string;
  translation: string;
  surah: string;
  ayah: number;
}

interface SettingsContextType {
  arabicFontSize: number;
  translationFontSize: number;
  favorites: VerseData[];
  dailyVerse: VerseData | null;
  setArabicFontSize: (size: number) => void;
  setTranslationFontSize: (size: number) => void;
  addToFavorites: (verse: VerseData) => void;
  removeFromFavorites: (id: string) => void;
  isFavorite: (id: string) => boolean;
  setDailyVerse: (verse: VerseData) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [arabicFontSize, setArabicFontSize] = useState(() => {
    const saved = localStorage.getItem('arabicFontSize');
    return saved ? parseInt(saved) : 24;
  });

  const [translationFontSize, setTranslationFontSize] = useState(() => {
    const saved = localStorage.getItem('translationFontSize');
    return saved ? parseInt(saved) : 16;
  });

  const [favorites, setFavorites] = useState<VerseData[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [dailyVerse, setDailyVerse] = useState<VerseData | null>(null);

  useEffect(() => {
    localStorage.setItem('arabicFontSize', arabicFontSize.toString());
  }, [arabicFontSize]);

  useEffect(() => {
    localStorage.setItem('translationFontSize', translationFontSize.toString());
  }, [translationFontSize]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (verse: VerseData) => {
    setFavorites(prev => [...prev.filter(v => v.id !== verse.id), verse]);
  };

  const removeFromFavorites = (id: string) => {
    setFavorites(prev => prev.filter(v => v.id !== id));
  };

  const isFavorite = (id: string) => {
    return favorites.some(v => v.id === id);
  };

  return (
    <SettingsContext.Provider value={{
      arabicFontSize,
      translationFontSize,
      favorites,
      dailyVerse,
      setArabicFontSize,
      setTranslationFontSize,
      addToFavorites,
      removeFromFavorites,
      isFavorite,
      setDailyVerse
    }}>
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};