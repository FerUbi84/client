import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Stock from './pages/Stock';
import Home from './pages/Home';
import AlteraPreco from './pages/AlteraPreco';
import Vender from './pages/Vender';
import Vendidos from './pages/Vendidos';
import Comprar from './pages/Comprar'
import TotalLucro from './pages/TotalLucro';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/stock" element={< Stock />} />
          <Route path="/altera_preco/:matricula" element={< AlteraPreco />}/>
          <Route path="/vender_carro/:matricula" element={< Vender />}/>
          <Route path="/vendidos" element={< Vendidos />} />
          <Route path="/comprar" element={< Comprar />} />
          <Route path="/total_lucro" element={< TotalLucro />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
