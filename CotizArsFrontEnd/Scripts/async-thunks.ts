import { IMonedaData, fetchMonedaSuccess, fetchMonedaBegin, fetchMonedaFailure } from './redux-actions';
import { fetch, addTask } from 'domain-task';

export function getOneCotizacion(monedaNombre: string) {
    return (dispatch: <T>(action: any) => T, getState: () => any) => {
        dispatch(fetchMonedaBegin());
        var uri = 'https://localhost:5001/cotizacion/' + monedaNombre
        //var uri = 'https://cotizarsapi20200531131015.azurewebsites.net/cotizacion/' + monedaNombre
        var moneda = fetch(uri, { method: 'get' })
            .then(handleErrors)
            .then( response => response.json())
            .then((data: IMonedaData) => { dispatch(fetchMonedaSuccess(data)) })
             //.catch(() => { }); 
            .catch(error => dispatch(fetchMonedaFailure(error)));
    }
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}