import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Navbar from './Navbar';

function AlteraPreco() {
    const { matricula } = useParams();
    const [carro, setCarro] = useState({});
    let history = useNavigate();
    const InitialValue = {
        preco_venda: 0
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/carros/selecionar_um/${matricula}`).then((response) => {
            //console.log(response.data.marca)
            setCarro(response.data)
            console.log(carro.marca)
        })
    }, [])

    const validationSchema = Yup.object().shape({
        preco_venda: Yup.number("Não é um número").min(carro.preco_compra, `Não poderá ser inferior a  ${carro.preco_compra}€`).required("Campo vazio")
    })

    const onSubmit = (data) => {
        console.log(matricula)
        console.log(data);
        axios.put(`http://localhost:5000/carros/aumentar_preco/${matricula}`, data)
            .then(() => {
                alert("Preço alterado");
                history('/stock');
            })
    }
    return (
        <div>
            <Navbar />
            <div className='container p-5 my-5 border'>
                <h1 className='h1 text-center'>Alteração do Valor do carro</h1>
                <h3 className='h3'>Informação do Veiculo</h3>
                <p><b>Marca:</b> {carro.marca}</p>
                <p><b>Modelo:</b> {carro.modelo}</p>
                <p><b>Ano:</b> {carro.ano}</p>
                <p><b>Preço de Compra:</b> {carro.preco_compra}€</p>
                <p><b>Preço de Venda:</b> {carro.preco_venda}€</p>
                <Formik initialValues={InitialValue} onSubmit={onSubmit} validationSchema={validationSchema} >
                    <Form className="form">
                        <div className='row'>
                            <div className='col-sm-4'>
                                <label htmlFor="preco_venda" className='form-label'><b>Novo Valor</b></label>
                                <Field autoComplete="off" className="form-control" id="preco_venda" name="preco_venda" placeholder="Altere o valor do carro" />
                                <ErrorMessage name="preco_venda" component="span" />
                            </div>
                        </div>
                        <button type="submit" className='btn btn-primary mt-2'>Alterar Valor</button>
                    </Form>
                </Formik>
            </div>
        </div>

    )
}

export default AlteraPreco
