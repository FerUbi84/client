import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

function TotalLucro() {
    const [ lucro, setLucro] = useState(0)

    useEffect(() =>{
        axios.get("http://localhost:5000/carros/total_lucro")
        .then((response) =>{
            setLucro(response.data.lucro)
        })
    })
    return (
        <div>
            <Navbar />
            <div className='container'>
                <h1 className='h1 text-center mb-5'>Total de Lucro</h1>
                <h3 className='h3 text-center'>O total de lucro dos carros vendidos é de {lucro}€</h3>
            </div>

        </div>
    )
}

export default TotalLucro
