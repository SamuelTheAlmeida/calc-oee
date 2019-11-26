import React from 'react';
import './App.css';
import Formulario from './Formulario';
import Resultado from './Resultado';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            horasOperacao: 0,
            minutosOperacao: 0,
            horasParadas: 0,
            minutosParadas: 0,
            pecasProduzidas: 0,
            pecasComDefeito: 0,
            pecasQtd: 0,
            pecasHoras: 0,
            pecasMinutos: 0,
            disponibilidade: 0,
            desempenho: 0,
            qualidade: 0,
            resultadoOEE: 0,
            diasPeriodo: 0,
            flgMostrarResultado: false
        }
    }

    handleChange(event){
        console.log("fired")
        console.log(event.target.name + " - " + event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    calcularOEE(){
        var dias = this.state.diasPeriodo;
        //disponibilidade:
        var tempoOperacao = (Number(this.state.minutosOperacao) + (Number(this.state.horasOperacao) * 60)) * dias;
        var tempoParado = Number(this.state.minutosParadas) + (Number(this.state.horasParadas) * 60);
        var disponibilidade = ((tempoOperacao - tempoParado) / tempoOperacao)

        //produtividade:
        var pecasPorMinutoEsperado = this.state.pecasQtd / (Number(this.state.pecasMinutos) + (Number(this.state.pecasHoras) * 60));
        var pecasEsperadas = pecasPorMinutoEsperado * (tempoOperacao - tempoParado);
        var desempenho = (this.state.pecasProduzidas / pecasEsperadas);

        //qualidade:
        console.log(this.state)
        var qualidade = (this.state.pecasProduzidas - this.state.pecasComDefeito) / this.state.pecasProduzidas;
        qualidade = qualidade;
        console.log(qualidade)
        var resultadoOEE = (disponibilidade * desempenho * qualidade)*100;
        
        this.setState({
            disponibilidade: disponibilidade*100,
            desempenho: desempenho*100,
            qualidade: qualidade*100,
            resultadoOEE: resultadoOEE,
            flgMostrarResultado: true
        })
    }

    voltar(){
        this.setState({
            flgMostrarResultado: false
        })
    }

    render() {
        const calcularDisabled = this.state.resultadoOEE === 0;
        return (
            <div className="col-lg-7 mx-auto appBox text-center">
                {!this.state.flgMostrarResultado &&
                <Formulario
                    handleChange={this.handleChange.bind(this)}
                    calcularOEE={this.calcularOEE.bind(this)}
                    calcularDisabled={calcularDisabled}
                />
                }
                {this.state.flgMostrarResultado &&
                    <Resultado
                        voltar={this.voltar.bind(this)}
                        resultado={this.state.resultadoOEE}
                        disponibilidade={this.state.disponibilidade}
                        desempenho={this.state.desempenho}
                        qualidade={this.state.qualidade}
                    />
                }
                <div className="row mt-3 text-light">
                    <div className="col-lg-4 text-left">
                        <span>TADS</span>
                    </div>
                    <div className="col-lg-4 text-center">
                        <span>Gestão da Qualidade</span>
                    </div>
                    <div className="col-lg-4 text-right">
                        <img alt="ufpr" src="/logo_ufpr.png" width="60px"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
