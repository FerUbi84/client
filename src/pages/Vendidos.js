import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from './Navbar';


function Vendidos() {
    const [listOfCarros, setlistOfCarros] = useState([]);
    const [qtdCarros, setQtdCarros] = useState(0);
    const [columns] = useState([
        { title: 'Matricula' },
        { title: 'Marca' },
        { title: 'Modelo' },
        { title: 'Ano' },
        { title: 'Preço Compra' },
        { title: 'Preço Venda' },
        { title: 'Lucro' },
    ])

    useEffect(() => {
        axios.get("http://localhost:5000/carros/selecionar_vendidos")
            .then((response) => {
                console.log(response.data)
                setlistOfCarros(response.data.venda)
                setQtdCarros(response.data.venda.length)
            })
    }, [])

    return (
        <div>
            <Navbar />
            {
                qtdCarros === 0 ?
                    <div className='container'>
                        <h1 className='h1 text-center'>Lista de vendidos vazia</h1>
                        <h3 className='h3 text-center mt-5'>Não existem carros vendidos</h3>
                    </div>
                    :
                    <div className='container'>
                        <table className="table table-striped table-hover table-responsive">
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
                                                <td>{value.lucro}€</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        {
                            qtdCarros === 1 ? <h3 className='h3 text-center mt-5'>Existe 1 carro vendido</h3>
                                : <h3 className='h3 text-center mt-5'>Existe {qtdCarros} carros vendidos</h3>
                        }
                    </div>
            }

        </div>
    )
}

export default Vendidos;

