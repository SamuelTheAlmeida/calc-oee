import React from 'react';
import { Button, Form } from 'react-bootstrap';

class Formulario extends React.Component {

    calcularOEE(evt){
        evt.preventDefault()
        this.props.calcularOEE();
    }

    handleChange(evt){
        console.log('handle change')
        this.props.handleChange(evt)
    }

    render(){
        const btnClassName = this.props.calcularDisabled ? "mt-4 mb-2 btn-lg btn-info" : "mt-4 mb-2 btn-lg btn-success"
        return(
            <Form inline>
                <h3 className="text-center my-3">OEE - Overall Equipment Effectiveness</h3>
                <p className="text-center"><strong>Digite abaixo as informações sobre a produção da máquina ou empreendimento</strong></p>

                <Form.Group controlId="formBasicEmail" className="my-2">
                    <Form.Label>Para fabricar </Form.Label>
                    <Form.Control name="pecasQtd" onChange={this.handleChange.bind(this)}
                    className="mx-1" type="number" min="0" step="1" placeholder="" />
                    <Form.Label> peças são necessárias </Form.Label>
                    <Form.Control name="pecasHoras" onChange={this.handleChange.bind(this)}
                    className="mx-1" type="number" step="1" placeholder="" />
                    <Form.Label> horas e </Form.Label>
                    <Form.Control name="pecasMinutos" onChange={this.handleChange.bind(this)}
                    className="mx-1" type="number" max="60" step="1" placeholder="" />
                    <Form.Label> minutos </Form.Label>
                </Form.Group>

                <Form.Group controlId="formBasicEmail" className="my-2">
                    <Form.Label>O tempo de operação da máquina é de </Form.Label>
                    <Form.Control name="horasOperacao" onChange={this.handleChange.bind(this)}
                    className="mx-1" type="number" step="1" placeholder="" />
                    <Form.Label> horas e </Form.Label>
                    <Form.Control name="minutosOperacao" onChange={this.handleChange.bind(this)}
                    className="mx-1" type="number" max="60" step="1" placeholder="" />
                    <Form.Label> minutos por dia</Form.Label>
                </Form.Group>

                <Form.Group controlId="formBasicEmail" className="my-2">
                    <Form.Label>Durante o período registrado a empresa trabalhou </Form.Label>
                    <Form.Control name="diasPeriodo" onChange={this.handleChange.bind(this)}
                    className="mx-1" type="number" min="0" step="1" placeholder="" />
                    <Form.Label> dias e o total de paradas </Form.Label>
                </Form.Group>

                <Form.Group controlId="formBasicEmail" className="my-2">
                    <Form.Label>foi de  </Form.Label>
                    <Form.Control name="horasParadas" onChange={this.handleChange.bind(this)}
                    className="mx-1" type="number" step="1" placeholder="" />
                    <Form.Label>horas e </Form.Label>
                    <Form.Control name="minutosParadas" onChange={this.handleChange.bind(this)}
                    className="mx-1" type="number" max="60" step="1" placeholder="" />
                    <Form.Label> minutos.</Form.Label>
                </Form.Group>
                
                <Form.Group controlId="formBasicEmail" className="my-2">
                    <Form.Label>Foram produzidas </Form.Label>
                    <Form.Control name="pecasProduzidas" onChange={this.handleChange.bind(this)}
                    className="mx-1" type="number" step="1" placeholder="" />
                    <Form.Label> peças e foram identificadas </Form.Label>
                    <Form.Control name="pecasComDefeito" onChange={this.handleChange.bind(this)}
                    className="mx-1" type="number" step="1" placeholder="" />
                    <Form.Label> peças com defeito.</Form.Label>
                </Form.Group>
            <div className="text-center">
                <button 
                className={btnClassName}
                onClick={this.calcularOEE.bind(this)}
                type="button">
                    <strong>Calcular</strong>
                </button>
            </div>
            </Form>

        );
    }
}

export default Formulario;