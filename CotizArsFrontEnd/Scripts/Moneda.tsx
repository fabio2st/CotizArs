import * as React from 'react';
import { connect } from 'react-redux';
import { retrieveMonedaData } from './async-thunks';
import { IMonedaData } from './redux-actions';

interface Props_redux extends IMonedaData {
    dispatch: <T>(action: any) => T
}
interface IState { }

class Comp extends React.Component<Props_redux, IState> {
    interval: number;
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.getData();
    }
    componentWillUnmount() {
        clearTimeout(this.interval);
    }

    private getData() {
        this.props.dispatch(retrieveMonedaData());
        this.interval = setTimeout(this.getData.bind(this), 5000);
    }

    render() {
        const { moneda, precio } = this.props;

        var content = null;
        if (moneda) {
            content =
                [
                    <div>Datos de CotizAr:</div>,
                    <div>Moneda: {moneda}</div>,
                    <div>Precio: {precio}</div>,
                //<div> {this.time} </div>
                ];
        }
        else
            content = [<div>Esperando datos de CotizAr</div>];
        //var update = [<div>Actualizado: {this.state.}</div>];
        return <div>{content}</div>;
    }
}

export var Moneda: React.ComponentClass<{}> = connect(state => { return { ...state }; })(Comp);