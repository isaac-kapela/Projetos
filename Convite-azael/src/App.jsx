import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio/Inicio';
import Conteudo from './components/Conteudo/Conteudo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/conteudo" element={<Conteudo />} />
      </Routes>
    </Router>
  );
}

export default App;