import './App.css';
import { SpecContextProvider } from './context/SpecContext';
import AppRoutes from './routes';

export default function App() {
  return (
    <SpecContextProvider>
      <AppRoutes />
    </SpecContextProvider>
  );
}
