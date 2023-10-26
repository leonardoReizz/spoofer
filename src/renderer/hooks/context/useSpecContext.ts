import { useContext } from 'react';
import { SpecContext } from '../../context/SpecContext';

export default function useSpecContext() {
  const specContext = useContext(SpecContext);
  return { ...specContext };
}
