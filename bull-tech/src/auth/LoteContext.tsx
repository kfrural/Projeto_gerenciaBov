import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Lote {
  id_lote: string | null;
  // Adicione outras informações do lote que deseja armazenar
}

interface LoteContextType {
  lote: Lote | null;
  setLote: (lote: Lote | null) => void;
}

const LoteContext = createContext<LoteContextType | undefined>(undefined);

export const useLote = (): LoteContextType => {
  const context = useContext(LoteContext);
  if (!context) {
    throw new Error('useLote must be used within a LoteProvider');
  }
  return context;
};

export const LoteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lote, setLote] = useState<Lote | null>(null);

  return (
    <LoteContext.Provider value={{ lote, setLote }}>
      {children}
    </LoteContext.Provider>
  );
};
