// src/hooks/useLocalStorage.ts
import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.error('LocalStorage Error:', error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('LocalStorage Error:', error);
    }
  };

  useEffect(() => {
    setStoredValue(JSON.parse(localStorage.getItem(key) || JSON.stringify(initialValue)));
  }, [key, initialValue]);

  return [storedValue, setValue] as const;
}

export default useLocalStorage;
