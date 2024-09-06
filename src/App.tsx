
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListarCategorias from './components/categorias/listarcategorias/ListarCategorias';
import Home from './pages/Home';
import FormCategoria from './components/categorias/formcategorias/FormCategorias';
import DeletarCategoria from './components/categorias/deletar categorias/DeletarCategorias';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[90vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadcategorias" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;