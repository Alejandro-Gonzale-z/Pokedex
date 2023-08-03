import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Pages/Home';
import PokemonDetail from './Pages/PokemonDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
