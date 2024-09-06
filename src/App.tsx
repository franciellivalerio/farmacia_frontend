
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
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
            <Route path="/Cardcategorias" element={<FormCategoria />} />
            <Route path="/Editarcategorias/:id" element={<FormCategoria />} />
            <Route path="/Deletarcategorias/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;