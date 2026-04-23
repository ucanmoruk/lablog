"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Service } from '@/data/mockData';

export interface QuoteItem extends Service {
  quantity: number;
}

interface QuoteContextType {
  quotes: QuoteItem[];
  addQuote: (service: Service) => void;
  removeQuote: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearQuotes: () => void;
}

const QuoteContext = createContext<QuoteContextType>({
  quotes: [],
  addQuote: () => {},
  removeQuote: () => {},
  updateQuantity: () => {},
  clearQuotes: () => {},
});

export const useQuote = () => useContext(QuoteContext);

export const QuoteProvider = ({ children }: { children: React.ReactNode }) => {
  const [quotes, setQuotes] = useState<QuoteItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('lab_quotes');
    if (saved) {
      try {
        setQuotes(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('lab_quotes', JSON.stringify(quotes));
    }
  }, [quotes, mounted]);

  const addQuote = (service: Service) => {
    if (!quotes.find(q => q.id === service.id)) {
      setQuotes([...quotes, { ...service, quantity: 1 }]);
    }
  };

  const removeQuote = (id: string) => {
    setQuotes(quotes.filter(q => q.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setQuotes(quotes.map(q => {
      if (q.id === id) {
        const newQty = Math.max(1, q.quantity + delta);
        return { ...q, quantity: newQty };
      }
      return q;
    }));
  };

  const clearQuotes = () => {
    setQuotes([]);
  };

  return (
    <QuoteContext.Provider value={{ quotes, addQuote, removeQuote, updateQuantity, clearQuotes }}>
      {children}
    </QuoteContext.Provider>
  );
};
