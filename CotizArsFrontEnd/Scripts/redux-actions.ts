export interface IMonedaData {
    moneda: string;
    precio: number;
}

export const RECEIVE_MONEDA = 'RECEIVE_MONEDA';

export function receiveMonedaData(data: IMonedaData) {
    return {
        type: RECEIVE_MONEDA,
        data
    };
}