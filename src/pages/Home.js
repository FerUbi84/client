import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <div className="container-fluid p-5 bg-primary text-white text-center bg-opacity-50">
                <h1 className="h1">Linguagem de Scripting</h1>
                <h1 className="h1">Paul Crocker</h1>
                <h2 className="h2">Trabalho Realizado por</h2>
                <h2 className="h2">Fernando Gomes | Augusto Bernardino</h2>
            </div>
            <div className="p-5 bg-light.bg-gradient">
                <h1 className="h1 text-center">
                    <Link to="/comprar" className='m-3'>Comprar</Link>
                    <Link to="/stock" className='m-3'>Stock</Link>
                    <Link to="/vendidos" className='m-3'>Carros Vendidos</Link>
                </h1>
            </div>
        </div>
    )
}

export default Home;
