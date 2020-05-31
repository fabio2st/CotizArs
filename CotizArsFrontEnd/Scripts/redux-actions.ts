export interface IMonedaData {
    moneda: string;
    precio: number;
}

//export const RECEIVE_MONEDA = 'RECEIVE_MONEDA';
export const FETCH_MONEDA_BEGIN = 'FETCH_MONEDA_BEGIN';
export const FETCH_MONEDA_SUCCESS = 'FETCH_MONEDA_SUCCESS';
export const FETCH_MONEDA_FAILURE = 'FETCH_MONEDA_FAILURE';

export const fetchMonedaBegin = () => ({
    type: FETCH_MONEDA_BEGIN
});

export const fetchMonedaFailure = error => ({
    type: FETCH_MONEDA_FAILURE,
    payload: { error }
});

export function fetchMonedaSuccess(data: IMonedaData) {
    return {
        type: FETCH_MONEDA_SUCCESS,
        data
    };
}