import { AnyAction } from 'redux';
import { RECEIVE_MONEDA, IMonedaData } from './redux-actions';

const monedaInitialState: IMonedaData = {
    moneda: '',
    precio: 0
};

export function moneda_reducers(state: IMonedaData = monedaInitialState, action: AnyAction) {
    switch (action.type) {
        case RECEIVE_MONEDA:
            return { ...state, ...action.data }
        default:
            return state;
    }
}