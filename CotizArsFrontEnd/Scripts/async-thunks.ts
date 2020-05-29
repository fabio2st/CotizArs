import { IMonedaData, receiveMonedaData } from './redux-actions';
import { fetch, addTask } from 'domain-task';

export function retrieveMonedaData() {
    return (dispatch: <T>(action: any) => T, getState: () => any) => {
        var moneda = fetch('https://localhost:5001/cotizacion/dolar', { method: 'get' })
            .then( response => response.json())
            .then((data: IMonedaData) => { dispatch(receiveMonedaData(data)) })
            .catch(() => { }); 
        addTask(moneda);
    }
}