import React from 'react';
import { Link } from 'react-router-dom';
 

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-sm bg-dark navbar-dark mb-5'>
            <div className='container-fluid'>
                <Link to="/" className='navbar-brand'>Oficina</Link>
                <ul className='navbar-nav'>
                    <li className='navbar-item'>
                        <Link to="/stock" className='nav-link'>Stock</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/comprar" className='nav-link'>Comprar</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/vendidos" className='nav-link'>Carros Vendidos</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/total_lucro" className='nav-link'>Total Lucro</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
