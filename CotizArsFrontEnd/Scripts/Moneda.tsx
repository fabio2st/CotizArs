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
    error
    loading
}
interface IState { }

class Comp extends React.Component<Props_redux, IState> {
    intervaloDeActualizacion: number;
    monedas = ['Dolar', 'Euro', 'Real'];
    precios = [0,0,0];

    private readonly mensajeDeCarga = <div>{this.MonedaTable()}<div>Cargando...</div></div>;

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
        const { error, loading } = this.props;
        if (error) {
            return this.mensajeError(error);
        }
        if (loading) {
            return this.mensajeDeCarga;
        }
        this.setCotizaciónActualizada();
        return ( this.MonedaTable());
    }

    private setCotizaciónActualizada() {
        var index = this.monedas.findIndex(value => value.toUpperCase() == this.props.nombreMoneda.toUpperCase());
        if (index != undefined)
            this.precios[index] = this.props.precio;
    }

    private MonedaTable() {
        return (
            <div>
                <table>
                    <thead>
                        <tr></tr>
                    </thead>
                    <tbody>
                        {this.MonedaFilas()}
                    </tbody>
                </table>
                <div>Actualizado: {Date()}</div>
            </div>
        )
    }

    MonedaFilas() {
        return (
        this.monedas.map((item, i) => (
            <tr key={i}>
                <td>{item}: </td>
                <td>$ {this.precios[i]}</td>
            </tr>
            )))
        };
    mensajeError(error: any) {
        return <div>Error!{error.message}</div>;
    }
}

const mapStateToProps = state => ({
    item: state.data.item,
    loading: state.data.loading,
    error: state.data.error
});
export var Moneda: React.ComponentClass<{}> = connect(state => { return { ...state }; })(Comp);


