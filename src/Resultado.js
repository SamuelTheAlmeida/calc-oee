import React from 'react';
import { Chart } from "react-google-charts";


class Resultado extends React.Component {

    render(){
		var oeeClassName = "";
        var oee = this.props.resultado;
        if (oee <= 40)
            oeeClassName = "text-danger"
        else if (oee <= 60)
            oeeClassName = "text-warning"
        else if (oee <= 85)
            oeeClassName = "text-info"
        else if (oee <= 100)
            oeeClassName = "text-success"
            
        return(
            <React.Fragment>
                <div className="my-3" style={{borderRadius: '10%'}}>
                <Chart
                width={'100%'}
                height={'150px'}
                chartType="PieChart"                
                data={[
                    ['Disponibilidade', '%'],
                    ['Disponível', this.props.disponibilidade],
                    ['Não disponível', 100-this.props.disponibilidade]
                  ]}
                options={{
                title: 'Disponibilidade',
                // Just add this option
                is3D: true
                }}
                />
                </div>
                <div className="my-3" style={{borderRadius: '10%'}}>
                <Chart
                width={'100%'}
                height={'150px'}
                chartType="PieChart"                
                data={[
                    ['Desempenho', '%'],
                    ['Produzido', this.props.desempenho],
                    ['Não produzido', 100-this.props.desempenho]
                  ]}
                options={{
                title: 'Desempenho',
                // Just add this option
                is3D: true
                }}
                />
            </div>
            <div className="my-3" style={{borderRadius: '10%'}}>
                <Chart
                width={'100%'}
                height={'150px'}
                chartType="PieChart"                
                data={[
                    ['Qualidade', '%'],
                    ['Conforme', this.props.qualidade],
                    ['Não conforme', 100-this.props.qualidade]
                  ]}
                options={{
                title: 'Qualidade',
                // Just add this option
                is3D: true
                }}
                />
                </div>
                <div className="my-3" style={{borderRadius: '10%'}}>
                <Chart
                width={'100%'}
                height={'150px'}
                chartType="PieChart"                
                data={[
                    ['OEE', '%'],
                    ['Eficiência', this.props.resultado],
                    ['Não eficiência', 100-this.props.resultado]
                  ]}
                options={{
                title: 'OEE',
                // Just add this option
                is3D: true
                }}
                />
            </div>                               
            <div className="text-left my-3">
                <button 
                className="btn btn-info"
                onClick={this.props.voltar}
                type="button">
                    <strong>Voltar</strong>
                </button>
            </div>
            </React.Fragment>
        );
    }
}

export default Resultado;