import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function Comprar() {

    let history = useNavigate();

    const InitialValue = {
        matricula: "",
        marca: "",
        modelo: "",
        ano: 0,
        preco_compra: 0,
        preco_venda: 0
    }

    const validationSchema = Yup.object().shape({
        matricula: Yup.string().required("Campo Vazio"),
        marca: Yup.string().required("Campo vazio"),
        modelo: Yup.string().required("Campo vazio"),
        ano: Yup.date().required("Campo vazio").typeError("Data incorrecta"),
        preco_compra: Yup.number("Não é um número").required("Campo vazio").typeError("Valor Inválido"),
        preco_venda: Yup.number("Não é um número").required("Campo vazio").typeError("Valor Inválido")
    })

    const onSubmit = (data) => {
        console.log(data);
        axios.post('http://localhost:5000/carros/compra', data)
            .then((response) => {
                if (response.status === 200) {
                    alert("Compra realizada")
                    history('/stock')
                } else {
                    alert("Compra realizada")
                    history('/stock')
                }
            })
    }

    return (
        <div>
            <Navbar />
            <div className='container'>
                <h1 className='h1 text-center mt-5'>Compra de Veiculo</h1>
                <Formik initialValues={InitialValue} validationSchema={validationSchema} onSubmit={onSubmit}>
                    <Form className='mt-5 container col-6'>
                        <div className='mb-3'>
                            <label htmlFor='matricula' className='form-label'>Matricula</label>
                            <Field autoComplete="off" className="form-control" name="matricula" />
                            <ErrorMessage name="matricula" component="span" />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='marca' className='form-label'>Marca</label>
                            <Field autoComplete="off" className="form-control" name="marca" />
                            <ErrorMessage name="marca" component="span" />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='modelo' className='form-label'>Modelo</label>
                            <Field autoComplete="off" className="form-control" name="modelo" />
                            <ErrorMessage name="modelo" component="span" />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='ano' className='form-label'>Ano</label>
                            <Field autoComplete="off" className="form-control" name="ano" />
                            <ErrorMessage name="ano" component="span" />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='preco_compra' className='form-label'>Preço Compra</label>
                            <Field autoComplete="off" className="form-control" name="preco_compra" />
                            <ErrorMessage name="preco_compra" component="span" />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='preco_venda' className='form-label'>Preço Venda</label>
                            <Field autoComplete="off" className="form-control" name="preco_venda" />
                            <ErrorMessage name="preco_venda" component="span" />
                        </div>
                        <button type="submit" className='btn btn-primary mt-2'>Comprar</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Comprar
