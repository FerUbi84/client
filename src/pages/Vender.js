import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

function Vender() {
    const { matricula } = useParams();
    const [carro, setCarro] = useState({});
    let history = useNavigate();


    useEffect(() => {
        axios.get(`http://localhost:5000/carros/selecionar_um/${matricula}`).then((response) => {
            //console.log(response.data.marca)
            setCarro(response.data)
        })
    }, [])
    const venderCarro = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:5000/carros/vender/${matricula}`)
            .then(() => {
                alert("Vendido")
                history('/stock')
            })

    }
    return (
        <div>
            <Navbar />
            <div className='container p-5 my-5 border'>
                <h1 className='h1 text-center'>Venda do Veiculo</h1>
                <h3 className='h3'>Informação do Veiculo:</h3>
                <p><b>Matricula:</b> {carro.matricula}</p>
                <p><b>Marca:</b> {carro.marca}</p>
                <p><b>Modelo:</b> {carro.modelo}</p>
                <p><b>Ano:</b> {carro.ano}</p>
                <p><b>Preço de Compra:</b> {carro.preco_compra}€</p>
                <p><b>Preço de Venda:</b> {carro.preco_venda}€</p>
                Deseja vender este Veiculo? <button type="button" className="btn btn-primary" onClick={venderCarro}>Sim</button>
            </div>
        </div>

    )
}

export default Vender
