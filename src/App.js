import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import Projeto from './paginas/Projetos';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/projetos' element={<Projeto/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
