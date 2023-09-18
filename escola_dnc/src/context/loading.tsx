import React, { createContext, useState } from 'react';

interface LoadingContextProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoadingContext = createContext<LoadingContextProps | null>(null);

export const LoadingProvider: React.FC = ({ children }) => {

  const [loading, setLoading] = useState<boolean>(false);

  return <LoadingContext.Provider value={{ loading, setLoading }}>{children}</LoadingContext.Provider>;
};
