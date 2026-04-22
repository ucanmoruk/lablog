"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Service } from '@/data/mockData';

interface QuoteContextType {
  quotes: Service[];
  addQuote: (service: Service) => void;
  removeQuote: (id: string) => void;
}

const QuoteContext = createContext<QuoteContextType>({
  quotes: [],
  addQuote: () => {},
  removeQuote: () => {},
});

export const useQuote = () => useContext(QuoteContext);

export const QuoteProvider = ({ children }: { children: React.ReactNode }) => {
  const [quotes, setQuotes] = useState<Service[]>([]);
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
      setQuotes([...quotes, service]);
    }
  };

  const removeQuote = (id: string) => {
    setQuotes(quotes.filter(q => q.id !== id));
  };

  return (
    <QuoteContext.Provider value={{ quotes, addQuote, removeQuote }}>
      {children}
    </QuoteContext.Provider>
  );
};
