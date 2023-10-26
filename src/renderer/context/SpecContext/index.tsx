/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-empty-pattern */
/* eslint-disable react/no-unused-prop-types */
import { ReactNode, createContext, useCallback, useState } from 'react';

interface SpecContextProviderProps {
  children: ReactNode;
}

interface SpecContextType {
  macAddress: number | undefined;
  changeMacAddress: (t: number) => void;
}

export const SpecContext = createContext({} as SpecContextType);

export function SpecContextProvider({ children }: SpecContextProviderProps) {
  const [macAddress, setMacAddress] = useState<number | undefined>();

  const changeMacAddress = useCallback((newMacAddress: number) => {
    setMacAddress(newMacAddress);
  }, []);

  return (
    <SpecContext.Provider value={{ macAddress, changeMacAddress }}>
      {children}
    </SpecContext.Provider>
  );
}
