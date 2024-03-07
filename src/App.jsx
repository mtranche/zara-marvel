import './App.css';
import '../src/assets/styles/marvel.scss';
import MarvelRoutes from '../src/routes/MarvelRoutes';
import { MarvelProvider } from '../src/contexts/MarvelContext';

function App() {
  return(
    <MarvelProvider>
      <MarvelRoutes />
    </MarvelProvider>
  );
};

export default App;
