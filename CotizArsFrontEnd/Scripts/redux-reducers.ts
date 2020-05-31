import { AnyAction } from 'redux';
import { FETCH_MONEDA_SUCCESS, FETCH_MONEDA_BEGIN, FETCH_MONEDA_FAILURE, IMonedaData } from './redux-actions';

const monedaInitialState: IMonedaData = {
    moneda: '',
    precio: 0
};

export function moneda_reducers(state: IMonedaData = monedaInitialState, action: AnyAction) {
    switch (action.type) {
        case FETCH_MONEDA_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_MONEDA_SUCCESS:
            return { ...state, ...action.data, loading: false }
        case FETCH_MONEDA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };
        default:
            return state;
    }
}