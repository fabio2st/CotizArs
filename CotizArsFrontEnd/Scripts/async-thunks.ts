import { IMonedaData, receiveMonedaData } from './redux-actions';
import { fetch, addTask } from 'domain-task';

export function getOneCotizacion(monedaNombre: string) {
    return (dispatch: <T>(action: any) => T, getState: () => any) => {
        var uri = 'https://localhost:5001/cotizacion/' + monedaNombre
        var moneda = fetch(uri, { method: 'get' })
            .then( response => response.json())
            .then((data: IMonedaData) => { dispatch(receiveMonedaData(data)) })
             .catch(() => { }); 
        addTask(moneda);
    }
}