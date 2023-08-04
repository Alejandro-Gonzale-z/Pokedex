import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Pages/Home';
import PokemonDetail from './Pages/PokemonDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/type/:elemetalType" element={<Home />} /> 
        {/* create a different elemental for the above path that will render 
        a page similar to home screen with more of an emphasis on the type */}
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
