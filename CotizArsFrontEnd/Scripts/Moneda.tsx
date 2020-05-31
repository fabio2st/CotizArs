import * as React from 'react';
import { connect } from 'react-redux';
import { getOneCotizacion } from './async-thunks';
import { IMonedaData } from './redux-actions';
//import { monedaTable } from './moneda-table';
//import ReactDOM from 'react-dom';
//import { Router } from './router';
//import { fetchMoneda } from './moneda-actions'

interface Props_redux extends IMonedaData {
    dispatch: <T>(action: any) => T
}
interface IState { }

class Comp extends React.Component<Props_redux, IState> {
    intervaloDeActualizacion: number;
    monedas = ['Dolar', 'Euro', 'Real'];
    precios = [0,0,0];

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.getAllCotizaciones();
    }
    componentWillUnmount() {
        clearTimeout(this.intervaloDeActualizacion);
    }

    private getAllCotizaciones() {
        for (var x = 0; x < this.monedas.length; x++) {
            this.props.dispatch(getOneCotizacion(this.monedas[x].toLowerCase()));
        }
        this.intervaloDeActualizacion = setTimeout(this.getAllCotizaciones.bind(this), 5000);
    }

    render() {
          this.setCotizaciónActualizada();
        return (
            this.MonedaTable()
        );
    }

    private setCotizaciónActualizada() {
        var index = this.monedas.findIndex(value => value.toUpperCase() == this.props.moneda.toUpperCase());
        if (index != undefined)
            this.precios[index] = this.props.precio;
    }

    private MonedaTable() {
        return <div>
            <table>
                <thead>
                    <tr></tr>
                </thead>
                <tbody>
                    {this.getTable()}
                </tbody>
            </table>
            <div>Actualizado: {Date()}</div>
        </div>;
    }

    getTable() {
        return (
        this.monedas.map((item, i) => (
            <tr>
                <td>{item}: </td>
                <td>$ {this.precios[i]}</td>
            </tr>
            )))
        };
}

export var Moneda: React.ComponentClass<{}> = connect(state => { return { ...state }; })(Comp);