import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';




function Stock() {
    const [listOfCarros, setlistOfCarros] = useState([]);
    const [columns] = useState([
        { title: 'Matricula' },
        { title: 'Marca' },
        { title: 'Modelo' },
        { title: 'Ano' },
        { title: 'Preço Compra' },
        { title: 'Preço Venda' },
        { title: 'Alterar Preço' },
        { title: 'Vender' },
    ])
    const [quantidadeCarros, setQuantidadeCarros] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:5000/carros/selecionar_todos")
            .then((response) => {
                setlistOfCarros(response.data.carros)
                setQuantidadeCarros(response.data.carros.length)
            })
    }, [])
    return (
        <div>
            <Navbar />
            {
                quantidadeCarros === 0 ?
                    <div className='container'>
                        <h1 className='h1 text-center'>Stock vazio</h1>
                        <h3 className='h3 text-center mt-5'>Para comprar clique no botão para aceder ao formulário de compra</h3>
                        <Link type='button' className='btn btn-outline-primary btn-lg position-absolute' to={'/comprar'}>Comprar</Link>
                    </div>
                    :
                    <div className='container'>
                        <table className="table table-striped|sm|bordered|hover|inverse table-inverse table-responsive">
                            <thead className="thead-inverse|thead-default">
                                <tr>
                                    {
                                        columns.map((value, key) => {
                                            return (
                                                <th key={key}>{value.title}</th>
                                            )
                                        })
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    listOfCarros.map((value, key) => {
                                        return (
                                            <tr key={key}>
                                                <td>{value.matricula}</td>
                                                <td>{value.marca}</td>
                                                <td>{value.modelo}</td>
                                                <td>{value.ano}</td>
                                                <td>{value.preco_compra}€</td>
                                                <td>{value.preco_venda}€</td>
                                                <td>
                                                    <Link type='button' className='btn btn-outline-primary' to={`/altera_preco/${value.matricula}`} >Alterar Preço</Link>
                                                </td>
                                                <td>
                                                    <Link type='button' className='btn btn-outline-primary' to={`/vender_carro/${value.matricula}`}>Vender</Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        {
                            quantidadeCarros === 1? <h3 className='h3 text-center'>Existe 1 carro em stock</h3> : <h3 className='h3 text-center'>Existe {quantidadeCarros} carros em stock</h3>
                        }
                    </div>
            }
        </div>
    )
}
export default Stock;
